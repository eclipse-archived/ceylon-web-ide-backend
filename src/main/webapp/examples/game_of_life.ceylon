value pwidth = 300;   // Width of drawing area in pixels
value pheight = 300;  // Height of drawing area in pixels
value size = 30;      // Number of cells horizontally and vertically

class Cell(index) {
    doc "The index of the Cell inside its Matrix."
    shared Integer index;
    doc "The current state of the Cell."
    shared variable Boolean state = false;
    doc "The next state of the Cell."
    variable Boolean ns = false;

    shared Boolean nextState { return ns; }
    assign nextState {
        ns = nextState;
    }

    doc "Evaluates the next state of the Cell, which
         depends on the states of its neighboring cells."
    shared void evaluateNextState([Cell+] neighbors) {
        value alives = neighbors.count((Cell c) => c.state);
        if (state) {
            ns = alives > 1 && alives < 4;
        } else {
            ns = alives == 3;
        }
    }

    doc "Copies the next state to the current state."
    shared void evolve() {
        state = ns;
    }

    shared actual String string =>
        "Cell: ``state then 1 else 0``";
}

class Matrix(gridSize) satisfies Iterable<Cell> {
    doc "The number of rows and columns of the Matrix."
    shared Integer gridSize;
    value sb = SequenceBuilder<Cell>();
    for (i in 0..(gridSize*gridSize-1)) {
        sb.append(Cell(i));
    }
    value grid = sb.sequence;

    shared actual Iterator<Cell> iterator() =>
        grid.iterator();

    doc "Returns the cells to the left and righ of the cell
         at the specified index."
    shared [Cell,Cell] getLeftRightNeighbors(Integer index) {
        variable value i = index - 1;
        //The cell to the left
        if (index%gridSize == 0) {
            i+=gridSize;
        }
        assert(exists c1 = grid[i]);
        //The cell to the right
        i = index + 1;
        if (i%gridSize == 0) {
            i -= gridSize;
        }
        assert(exists c2 = grid[i]);
        return [c1,c2];
    }

    doc "Returns the 8 cells surrounding the one at
         the specified index."
    shared [Cell+] getNeighbors(Integer index) {
        value sb = SequenceBuilder<Cell>();
        //Left and right
        variable value sameRow = getLeftRightNeighbors(index);
        sb.append(sameRow[0]);
        sb.append(sameRow[1]);
        //The cell above
        variable value i = index - gridSize;
        if (i < 0) {
            i += grid.size;
        }
        if (exists c = grid[i]) {
            sb.append(c);
            sameRow = getLeftRightNeighbors(i);
            sb.append(sameRow[0]);
            sb.append(sameRow[1]);
        }
        //The cell below
        i = index + gridSize;
        if (i >= grid.size) {
            i -= grid.size;
        }
        if (exists c = grid[i]) {
            sb.append(c);
            sameRow = getLeftRightNeighbors(i);
            sb.append(sameRow[0]);
            sb.append(sameRow[1]);
        }
        assert(nonempty r = sb.sequence);
        return r;
    }

    shared void evaluate(void intermedio(Cell c), void final(Cell c)) {
        for (c in this) {
            c.evaluateNextState(getNeighbors(c.index));
            intermedio(c);
        }
        for (c in this) {
            c.evolve();
            final(c);
        }
    }

    doc "Sets the state of the cell at the specified index."
    shared void setState(Integer index, Boolean state = true) {
        if (exists c = grid[index]) {
            c.state = state;
        }
    }

    doc "Prints the matrix, using dots for dead cells
         and X for living cells."
    shared actual String string {
        value sb = StringBuilder();
        for (c in this) {
            if (c.index > 0 && c.index%gridSize==0) {
                sb.appendNewline();
            }
            sb.append(c.state then "X" else ".");
        }
        return sb.string;
    }

    doc "Resets all the cells to a dead state, then
         sets the cells at the specified indexes to a
         living state."
    shared void init(Integer* values) {
        for (c in grid) {
            c.state=false;
        }
        for (i in values) {
            setState(i);
        }
    }

}

value life = Matrix(size);

value cwidth = pwidth / size;
value cheight = pheight / size;

void draw() {
    dynamic {
        value canvas = document.getElementById("lifegrid");
        if (exists canvas) {
            value ctx = canvas.getContext("2d");
            
            void drawinter(Cell c) {
                // Not drawing intermediate state
            }
            void drawfinal(Cell c) {
                value cx = c.index % size;
                value cy = c.index / size;
                if (c.state) {
                    ctx.fillStyle = "#FF0000";
                } else {
                    ctx.fillStyle = "#000000";
                }
                ctx.fillRect(cx * cwidth, cy * cheight, cwidth, cheight);
            }
            life.evaluate(drawinter, drawfinal);
      
            setTimeout(draw, 100);
        }
    }
}

dynamic {
    if (!document.getElementById("lifegrid") exists) {
        value canvas = document.createElement("canvas");
        canvas.setAttribute("id", "lifegrid");
        canvas.setAttribute("width", pwidth);
        canvas.setAttribute("height", pheight);
        value corePage = document.getElementById("core-page");
        corePage.insertBefore(canvas, corePage.childNodes[3]);
        value ctx = canvas.getContext("2d");
        ctx.fillRect(0, 0, pwidth, pheight);
    }

    for (c in life) {
        c.state = c.index%2==0 then (Math.random() > 0.5) else false;
    }

    setOnStop(void() {
        value canvas = document.getElementById("lifegrid");
        if (exists canvas) {
            canvas.parentNode.removeChild(canvas);
        }
    });
  
    setTimeout(draw, 100);
}