// Interfaces and abstract classes can specify a list of
// implementing types.
abstract class Node() of Leaf | Branch {}
class Leaf(item) extends Node() {
    shared Float item;
}
class Branch(left, right) extends Node() {
    shared Node left;
    shared Node right;
}
// This is not allowed:
//class Proxy() extends Node() {}

Node tree = Branch {
    left = Leaf(1.1);
    right = Branch {
        left = Leaf(2.2);
        right = Leaf(3.3);
    };
};

// The switch statement "knows" the possible sub types:
void printTree(Node root) {
    switch (root)
    case (is Leaf) { print(root.item); }
    case (is Branch) {
        printTree(root.left);
        printTree(root.right);
    }
    // This is not allowed (not a possible sub type):
    //case (is String) {} //ERROR!
    // Although switches must be exhaustive, an else is not
    // required because the specified cases are sufficient: 
    //else {}
}
printTree(tree);

// Object enumerations are also possible;
// however, they currently don't work in the web IDE due to
// https://github.com/ceylon/ceylon-web-ide-backend/issues/58
// Note that this is only a restriction of the web IDE:
// it works on both the Java and JavaScript backends.
abstract class Color(name) /* of red | green | blue */ {
    shared String name;
}
object red extends Color("red") {}
object green extends Color("green") {}
object blue extends Color("blue") {}

// Toplevel objects can be used in switch statements.
void testSize(Integer x) {
    Comparison cmp = x <=> 5;
    switch (cmp)
    case (smaller) { print("``x`` is smaller than 5"); }
    case (larger) { print("``x`` is larger than 5"); }
    case (equal) { print("x is exactly 5"); }
}
testSize(42);