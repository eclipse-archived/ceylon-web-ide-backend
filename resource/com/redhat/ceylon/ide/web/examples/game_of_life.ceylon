//$webrun_wrapped
shared void run() {
// Game of Life 2.4

value seed = system.milliseconds;
value density = 0.8;

value gwidth = 124;   // Number of cells horizontally and vertically
value gheight = 60;   // Number of cells horizontally and vertically

abstract class State() {}
object alive extends State() {}
object resurrected extends State() {}
object moribund extends State() {}
object dead extends State() {}

class Cell(x, y) {
    "The x position of the Cell inside the Grid"
    shared Integer x;
    "The y position of the Cell inside the Grid."
    shared Integer y;
    "The current state of the Cell"
    shared variable State state = dead;
    
    // All the neighbouring cells
    late shared [Cell,Cell,Cell,Cell,Cell,Cell,Cell,Cell] neighbors;
    
    variable Integer nroNeighbours = 0;
    
    shared void setup() =>
            update(resurrected, 0);
    
    shared void resurrect() =>
            update(alive, 1);
    
    shared void kill() =>
            update(dead, -1);
    
    void update(State newState, Integer dN) {
        if (state == newState) {
            return;
        }
        state = newState;
        nroNeighbours = neighbors.count((c) => c.state == alive);
        for (c in neighbors) {
            c.nroNeighbours += dN;
        }
    }
    
    shared State nextState {
        if (state == alive) {
            if (nroNeighbours < 2 || nroNeighbours > 3) {
                return moribund;
            }
            return alive;
        } else {
            if (nroNeighbours == 3) {
                return resurrected;
            }
            return dead;
        }
    }
    
    shared Boolean canResurrect() {
        if (state == dead && nroNeighbours == 3) {
            state = resurrected;
            return true;
        } else {
            return false;
        }
    }
    
    shared Cell[] resurrections() {
        value result = [ for (c in neighbors) if (c.canResurrect()) c ];
        return state == resurrected then result.withLeading(this) else result;
    }
    
    shared actual String string =>
            "Cell[``x``,``y``]: ``state`` (``nroNeighbours``)";
}

class Grid(width, height) {
    "The number of columns of the Grid"
    shared Integer width;
    "The number of rows of the Grid"
    shared Integer height;
    
    "The list of alive cells"
    variable Cell[] _living = [];
    
    shared Cell[] living => _living;
    
    // Create the grid
    value cells = Array{for(y in 0:height) for(x in 0:width) Cell(x, y)};
    
    Cell cell(Integer x, Integer y) {
        value c = cells[(y + height) % height * width + (x + width) % width];
        assert(exists c);
        return c;
    }
    
    // Set up the grid
    for (y in 0:height) {
        for (x in 0:width) {
            value c = cell(x, y);
            c.neighbors = [ cell(x - 1, y - 1), cell(x, y - 1), cell(x + 1, y - 1), cell(x - 1, y),
            cell(x + 1, y), cell(x - 1, y + 1), cell(x, y + 1), cell(x + 1, y + 1) ];
        }
    }
    
    shared void add(Integer x, Integer y) {
        value c = cell(x, y);
        c.setup();
        _living = _living.withTrailing(c);
    }
    
    shared [Cell[], Cell[]] evolve() {
        // Pass through the list of living cells and split
        // it in two: one for the ones that stay alive and
        // one for the ones that will die. At the same time
        // we construct a third list with dead cells that
        // will be resurrected
        value alives = [ for (c in _living)
        if (c.state == alive && c.nextState == alive) c ];
        value moribunds = [ for (c in _living)
        if (c.state == alive && c.nextState == moribund) c ];
        value resurrections = [ for (c in _living) for (r in c.resurrections()) r ];
        
        // And resurrect the dead ones
        for (c in resurrections) {
            c.resurrect();
        }
        // Now kill all the moribund cells
        for (c in moribunds) {
            c.kill();
        }
        // Set the global list of alive cells
        _living = concatenate(alives, resurrections);
        
        return [resurrections, moribunds];
    }
}

variable Integer _seed = seed;

Float random() {
    _seed = (_seed * 9301 + 49297) % 233280;
    return _seed / 233280.0;
}

Grid randomNoiseGrid(Integer width, Integer height, Float probability) {
    value grid = Grid(width, height);
    for (y in 0..gheight) {
        for (x in 0..gwidth) {
            if (random() > probability) {
                grid.add(x, y);
            }
        }
    }
    return grid;
}

value life = randomNoiseGrid(gwidth, gheight, density);

variable value pwidth = 620;   // Width of drawing area in pixels
variable value pheight = 300;  // Height of drawing area in pixels

variable value cwidth = pwidth / gwidth;
variable value cheight = pheight / gheight;

variable value count = 0;
variable value start = system.milliseconds;
variable value prevNew = -1;
variable value prevDead = -1;
variable value prevCount = 0;

variable dynamic ctx2d = null;

void drawCells({Cell*} cells, void drawCell(Cell c)) {
    for (c in cells) {
        drawCell(c);
    }
}

void draw() {
    value newXdead = life.evolve();
    value newCells = newXdead[0];
    value deadCells = newXdead[1];
    count++;
    value runtime = (system.milliseconds - start);
    value fps = count.float / (runtime.float / 1000.0);
    if (prevCount >= 0 && count % 100 == 0) {
        print("draw (new=``newCells.size``, dead=``deadCells.size``, count=``count``, fps=``fps``)");
    }
    
    if (prevCount >= 0 && prevNew == newCells.size && prevDead == deadCells.size) {
        if (prevCount > 10) {
            print("Stable state, loop detected");
            print("Drawn ``count`` frames in ``runtime/1000`` seconds (fps=``fps``)");
            prevCount = -1;
        } else {
            prevCount++;
        }
    } else {
        prevNew = newCells.size;
        prevDead = deadCells.size;
    }
    dynamic {
        if (exists ctx=ctx2d) {
            void drawCell(Cell c) {
                if (c.state == alive) {
                    ctx.fillStyle = "#FF0000";
                } else {
                    ctx.fillStyle = "#FFE0E0";
                }
                ctx.fillRect(c.x * cwidth, c.y * cheight, cwidth, cheight);
            }
            
            drawCells(newCells, drawCell);
            drawCells(deadCells, drawCell);
            
            if (!newCells.empty || !deadCells.empty) {
                setTimeout(draw, 1);
            } else {
                print("Stable state, stopped");
                print("Drawn ``count`` frames in ``runtime/1000`` seconds (fps=``fps``)");
            }
        } else {
            print("Stopped by user");
        }
    }
}

dynamic {
    dynamic win = openCanvasWindow();
    dynamic canvas = win.ceylonCanvas;
    canvas.id = "lifegrid";
    pwidth = canvas.scrollWidth;
    pheight = canvas.scrollHeight;
    cwidth = pwidth / gwidth;
    cheight = pheight / gheight;
    canvas.width = cwidth * gwidth;
    canvas.height = cheight * gheight;
    ctx2d = canvas.getContext("2d");
    ctx2d.fillStyle = "#FFFFFF";
    ctx2d.fillRect(0, 0, pwidth, pheight);
    
    setOnStop(void() {
        if (exists ctx=ctx2d) {
            ctx2d = null;
        }
    });
    
    setTimeout(draw, 1);
}

print("Game of Life");
print("Seed used: ``seed``");
}
