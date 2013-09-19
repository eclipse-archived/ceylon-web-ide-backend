// Game of Life 2.4

value pwidth = 620;   // Width of drawing area in pixels
value pheight = 300;  // Height of drawing area in pixels
value gwidth = 124;   // Number of cells horizontally and vertically
value gheight = 60;   // Number of cells horizontally and vertically

abstract class State() of alive | resurrected | moribund | dead {}
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
    late shared Cell ul;
    late shared Cell uc;
    late shared Cell ur;
    late shared Cell l;
    late shared Cell r;
    late shared Cell bl;
    late shared Cell bc;
    late shared Cell br;

    variable Integer nroNeighbours = 0;

    shared void setup() {
        update(resurrected, 0);
    }

    shared void resurrect() {
        update(alive, 1);
    }

    shared void kill() {
        update(dead, -1);
    }

    void update(State newState, Integer dN) {
        if (state == newState) {
            return;
        }
        state = newState;
        nroNeighbours = (ul.state == alive then 1 else 0)
            + (uc.state == alive then 1 else 0)
            + (ur.state == alive then 1 else 0)
            + (l.state == alive then 1 else 0)
            + (r.state == alive then 1 else 0)
            + (bl.state == alive then 1 else 0)
            + (bc.state == alive then 1 else 0)
            + (br.state == alive then 1 else 0);
        ul.nroNeighbours += dN;
        uc.nroNeighbours += dN;
        ur.nroNeighbours += dN;
        l.nroNeighbours += dN;
        r.nroNeighbours += dN;
        bl.nroNeighbours += dN;
        bc.nroNeighbours += dN;
        br.nroNeighbours += dN;
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
        variable Cell[] result = {};
        if (state == resurrected) { result = result.withTrailing(this); }
        if (ul.canResurrect()) { result = result.withTrailing(ul); }
        if (uc.canResurrect()) { result = result.withTrailing(uc); }
        if (ur.canResurrect()) { result = result.withTrailing(ur); }
        if (l.canResurrect()) { result = result.withTrailing(l); }
        if (r.canResurrect()) { result = result.withTrailing(r); }
        if (bl.canResurrect()) { result = result.withTrailing(bl); }
        if (bc.canResurrect()) { result = result.withTrailing(bc); }
        if (br.canResurrect()) { result = result.withTrailing(br); }
        return result;
    }
    
    shared actual String string =>
        "Cell[``x``,``y``]: ``state`` (``nroNeighbours``)";
}

class Grid(width, height) {
    "The number of columns of the Grid"
    shared Integer width;
    "The number of rows of the Grid"
    shared Integer height;
    
    // The list of alive cells
    variable Cell[] _living = {};
    
    shared Cell[] living {
        return _living;
    }
    
    // Create the grid
    value cells = array{for(y in 0:height) for(x in 0:width) Cell(x, y)};
    
    Cell cell(Integer x, Integer y) {
        value c = cells[(y + height) % height * width + (x + width) % width];
        assert(exists c);
        return c;
    }
    
    // Set up the grid
    for (y in 0:height) {
        for (x in 0:width) {
            value c = cell(x, y);
            c.ul = cell(x - 1, y - 1);
            c.uc = cell(x, y - 1);
            c.ur = cell(x + 1, y - 1);
            c.l = cell(x - 1, y);
            c.r = cell(x + 1, y);
            c.bl = cell(x - 1, y + 1);
            c.bc = cell(x, y + 1);
            c.br = cell(x + 1, y + 1);
        }
    }
 
    shared void add(Integer x, Integer y) {
        value c = cell(x, y);
        c.setup();
        _living = _living.withTrailing(c);
    }
    
    shared [Cell[], Cell[]] evolve() {
        // Pass through the list of living cells and split
        // it in teo: one for the ones that stay alive and
        // one for the ones that will die. At the same time
        // we construct a third list with dead cells that
        // will be resurrected
        variable Cell[] alives = [];
        variable Cell[] moribunds = [];
        value seq = SequenceBuilder<Cell>();
        for (c in _living) {
            if (c.state == alive) {
                if (c.nextState == alive) {
                    alives = alives.withTrailing(c);
                } else if (c.nextState == moribund) {
                    moribunds = moribunds.withTrailing(c);
                }
            }
            seq.appendAll(c.resurrections());
        }
        Cell[] resurrections = seq.sequence;
        
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

Integer getTime() {
    dynamic {
        return Date().getTime();
    }
}

// George Marsaglia's Random Number Generator
variable Integer m_w = getTime() / 13;
variable Integer m_z = getTime() / 648;
Float random() {
    m_z = 36969 * m_z.and(2^15-1) + m_z.rightLogicalShift(16);
    m_w = 18000 * m_w.and(2^15-1) + m_w.rightLogicalShift(16);
    Integer r = m_z.leftLogicalShift(15).and(2^30-1) + m_w;  /* 32-bit result */
    return r.float / (2^30-1).float;
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

value life = randomNoiseGrid(gwidth, gheight, 0.8);

value cwidth = pwidth / gwidth;
value cheight = pheight / gheight;

variable value count = 0;
variable value start = getTime();
variable value prevNew = -1;
variable value prevDead = -1;
variable value prevCount = 0;

void drawCells({Cell*} cells, void drawCell(Cell c)) {
    for (c in cells) {
        drawCell(c);
    }
}

void draw() {
    value newXdead = life.evolve();
    value new = newXdead[0];
    value dead = newXdead[1];
    count++;
    value runtime = (getTime() - start);
    value fps = count.float / (runtime.float / 1000.0);
    if (prevCount >= 0 && count % 100 == 0) {
        print("draw (new=``new.size``, dead=``dead.size``, count=``count``, fps=``fps``)");
    }
    
    if (prevCount >= 0 && prevNew == new.size && prevDead == dead.size) {
        if (prevCount > 10) {
            print("Stable state, loop detected");
            print("Drawn ``count`` frames in ``runtime/1000`` seconds (fps=``fps``)");
            prevCount = -1;
        } else {
            prevCount++;
        }
    } else {
        prevNew = new.size;
        prevDead = dead.size;
    }
    dynamic {
        dynamic canvas = document.getElementById("lifegrid");
        if (exists canvas) {
            dynamic ctx = canvas.getContext("2d");
            
            void drawCell(Cell c) {
                if (c.state == alive) {
                    ctx.fillStyle = "#FF0000";
                } else {
                    ctx.fillStyle = "#FFE0E0";
                }
                ctx.fillRect(c.x * cwidth, c.y * cheight, cwidth, cheight);
            }
            
            drawCells(new, drawCell);
            drawCells(dead, drawCell);
      
            if (!new.empty || !dead.empty) {
                setTimeout(draw, 1);
            } else {
                print("Stable state, stopped");
                print("Drawn ``count`` frames in ``runtime/1000`` seconds (fps=``fps``)");
            }
        }
    }
}

dynamic {
    if (!document.getElementById("lifegrid") exists) {
        dynamic canvas = document.createElement("canvas");
        canvas.setAttribute("id", "lifegrid");
        canvas.setAttribute("width", pwidth);
        canvas.setAttribute("height", pheight);
        dynamic corePage = document.getElementById("core-page");
        corePage.insertBefore(canvas, corePage.childNodes[3]);
        dynamic ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, pwidth, pheight);
    }

    setOnStop(void() {
        dynamic canvas = document.getElementById("lifegrid");
        if (exists canvas) {
            canvas.parentNode.removeChild(canvas);
        }
    });
  
    setTimeout(draw, 1);
}

print("Game of Life");
print("Seed used: ``m_w``, ``m_z``");
