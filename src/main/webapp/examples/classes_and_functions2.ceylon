//$webrun_wrapped
shared void run(){
// We can use a reference to a function as a value:
Float average(Float x, Float y) => (x + y) * 0.5;
value f1 = average;
print("f1(1.0, 7.0) = ``f1(1.0, 7.0)``");

// The type of f1 is Float(Float, Float):
Float(Float, Float) f2 = f1;

// We can also write:
Float f3(Float x, Float y) => f1(x,y);

"Function references can be used like any other value,
 for instance as arguments or return values"
Float(Float, Float) makeFunc(
        "Notice the Return(Param) syntax, this is a value parameter"
        Float(Float) f) {
    // Nested functions can access data from the surrounding
    // function:
    Float ret(Float x, Float y) => average(f(x), f(y));
    return ret;
}

Float twice(Float n) => 2.0*n;
value doubleAvg = makeFunc(twice);
print("doubleAvg(1.0, 7.0) = ``doubleAvg(1.0, 7.0)``");

// We can also use references to methods of objects.
// For instance, Float has a method "times":
print("Should be the same: ``makeFunc(2.0.times)(1.0, 7.0)``");

"We can further improve this using anonymous functions"
function makeFunc2(
        "This alternate syntax makes it a Callable parameter"
        Float f(Float g)) {
    // This is equivalent to "ret" in makeFunc above:
    return (Float x, Float y) => average(f(x), f(y));
}
"Because makeFunc2 param uses Callable syntax,
 the type parameter can be inferred here"
value squareAvg = makeFunc2((n) => n^2);
print("squareAvg(1.0, 7.0) = ``squareAvg(1.0, 7.0)``");

// A different and rather elegant and approach is to define a
// function with multiple parameter lists:
Float expAvg(Float e)(Float x, Float y) => average(x^e, y^e);

// Applying the first parameter list returns a "normal" function
// with one parameter list:
value squareAvg2 = expAvg(2.0);
print("squareAvg2(1.0, 7.0) = ``squareAvg2(1.0, 7.0)``");

// Function references can even refer to class initializers! They
// are treated as functions that return an instance of the class.
class Product(String name) {
    shared actual String string = "Product '``name``'";
}
Product? getByName(String name) { return null; }
variable Product?(String) getProd = getByName;
getProd = Product;
print(getProd("Giraffe, extra long") else "not found");

// Note the differing return types above: "Product"
// vs. "Product?". That's indeed allowed:
void voidFunc() { print("returns nothing"); }
variable Anything() funcRef = voidFunc;
String stringFunc() => "returns a String";
funcRef = stringFunc; // return value will be ignored

// Somewhere above we nested a function inside a function. In
// fact, most language elements can be nested inside each other:
class Outer(Float(Float, Float) func) {
    Float calc(Float x, Float y) => func(x,y);
 
    // Types can be nested inside other types...
    shared class Inner() {
        shared Float f() {
            interface I { /*...*/ } // ...or inside functions.
  
            // The keyword "object" lets us define an anonymous
            // class with one single instance.
            object obj satisfies I {
                shared Integer x = 3;
            }
   
            // "outer" refers to the outer instance
            return outer.calc(obj.x.float, 5.0);
        }
    }
}
Outer o = Outer(average);
Outer.Inner i = o.Inner();
print("Outer(average).Inner().f() = ``i.f()``");
}
