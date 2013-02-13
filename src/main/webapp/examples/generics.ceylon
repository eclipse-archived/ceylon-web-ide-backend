// Ceylon allows generic types and functions, i.e. they may have
// type parameters:
class Generic<Item>(item) {
    shared variable Item item;
    shared Item f(Item other) { return other; }
}
Item genericFunc<Item>(Item i) { return i; }

// Note that a Generic<String> is not a Generic<Object>:
//    Generic<Object> obj = Generic<String>("test");
//    obj.item := 5;  //ouch!
// But for some types such a relation is possible, namely if the
// generic type is only used as return type, not for method
// parameters:
class Covariant<out Item>(item) {
    shared Item item;
    shared Item? f() { return null; }
}
Covariant<Object> obj = Covariant<String>("test");
Object i1 = obj.item; // No conflict arises if Item is only
Object? i2 = obj.f(); // used as return type.
// We have to mark such a type parameter "out" (see above).

// The exact opposite is also possible:
class Contravariant<in Item>(Item i) {
    shared void f(Item i) { /*...*/ }
}
Contravariant<String> obj2 = Contravariant<Object>("test");
obj2.f("hi"); // no conflict, a String is an Object

// We can specify bounds for the type parameter:
class Tools<out Num>(Num x, Num y)
            given Num satisfies Scalar<Num> {
    shared Num dist() {
        // We know that x and y are numbers (type Scalar<Num>),
        // so we can use the corresponding operations/methods.
        return (x < y) then (y-x) else (x-y);
    }
}
Tools<Float> t1 = Tools<Float>(-3.1, 0.62);
print("t1.dist() = ``t1.dist()``");

// Let the compiler infer the types:
value t2 = Tools(814, 5);
print("t2.dist() = ``t2.dist()`` (type ``className(t2.dist())``)");