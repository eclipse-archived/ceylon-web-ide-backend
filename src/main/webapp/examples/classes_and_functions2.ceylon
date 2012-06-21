// We can use a reference to a function as a value:
Float average(Float x, Float y) { return (x + y) * 0.5; }
value f1 = average;
print("f1(1.0, 7.0) = " f1(1.0, 7.0) "");

// The type of f1 is Float(Float, Float):
Float(Float, Float) f2 = f1;

// We can also write:
Float f3(Float x, Float y) = f1;

// Function references can be used like any other value,
// for instance as arguments or return values:
Float(Float, Float) makeFunc(Float(Float) f) {
    Float ret(Float x, Float y) {
        // Nested functions can access data from the surrounding
        // function:
        return average(f(x), f(y));
    }
    return ret;
}

Float twice(Float n) { return 2.0*n; }
value doubleAvg = makeFunc(twice);
print("doubleAvg(1.0, 7.0) = " doubleAvg(1.0, 7.0) "");

// We can also use references to methods of objects.
// For instance, Float has a method "times":
print("Should be the same: " makeFunc(2.0.times)(1.0, 7.0) "");

// We can further improve this using anonymous functions:
function makeFunc2(Float(Float) f) {
    // This is equivalent to "ret" in makeFunc above:
    return (Float x, Float y) average(f(x), f(y));
}
value squareAvg = makeFunc2((Float n) n**2);
print("squareAvg(1.0, 7.0) = " squareAvg(1.0, 7.0) "");

// Function references can even refer to class initializers! They
// are treated as functions that return an instance of the class.
class Product(String name) {
    shared actual String string = "Product '" name "'";
}
Product? getByName(String name) { return null; }
variable Product?(String) getProd := getByName;
getProd := Product;
print(getProd("Giraffe, extra long") else "not found");
