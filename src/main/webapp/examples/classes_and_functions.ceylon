// Functions use the familiar C/Java syntax:
Float mean(Float x, Float y) {
    return ((x*x + y*y) / 2) ** 0.5;
}
print("mean(11.0, 307.0) = " mean(11.0, 307.0) "");
 
// With the "function" keyword the compiler infers the type.
function average(Float x, Float y) {
    return (x + y) * 0.5;
}
print("average(11.0, 307.0) = " average(11.0, 307.0) "");
 
// Classes look fairly similar to functions:
class SimpleProduct(String name, Float price) {
 
    // The class body may contain initialization code.
    if (price < 0.0) {
        throw Exception("Invalid price: " price "!");
    }
 
    // Classes can contain attributes and methods as members.
    variable value quantity := 10;
 
    // "shared" members are visible everywhere the class is
    // visible, otherwise they are private to the class.
    shared Boolean inStock() {
        return quantity > 0;
    }

    doc "Determines if the product is free of charge"
    shared Boolean isFree() {
       // class parameters are visible everywhere inside the body
       return price == 0.0;
    }
}

value trompon = SimpleProduct("Elephant", 0.0);
print("free: " trompon.isFree() "");

// Let's improve this with some nice Ceylon features!

doc "Abstract base class for products"
by "superuser"
abstract class Product(name, price) {
 
    // We can turn parameters into attributes using the syntax
    // seen here (not the missing type above).
    shared String name;
    shared Float price;
 
    if (price <= 0.0) {
        throw Exception("Invalid price: " price "!");
    }
 
    // "formal" members have no value/implementation. They are
    // implemented in derived classes.
    shared formal variable Integer quantity;
 
    // isFree is now an attribute instead of a method
    shared Boolean isFree = (price == 0.0);
 
    // inStock is also an attribute. But instead of specifying a
    // value we implement it as a getter.
    // "default" members have a default value/implementation
    // which can be overridden in derived classes.
    shared default Boolean inStock { return quantity > 0; }
}
 
doc "Concrete implementation of `Product`"
see (Product)
class ProductInDatabase(String name, Float price)
            extends Product(name, price) {
              
    // variable attributes can be implemented as getter/setter:
    shared actual Integer quantity {
        return 10; //TODO: read from databse
    }
    assign quantity {
        //TODO: store in database
        print("Set quantity to " quantity "");
    }
}

value polly = ProductInDatabase("Parrot", 49.99);
print("Product '" polly.name "' costs " polly.price "");

// Whether an attribute is implemented with a getter/setter is
// irrelevant when accessing it:
print("In stock: " polly.inStock
      " (quantity: " polly.quantity ")");
polly.quantity := 12;
 
// Overloading (two functions with the same name, or two class
// constructors) is not allowed. But we can use union types,
// defaulted parameters and sequenced parameters to achieve
// approximately the same effect.
void order(Product|String product, Integer count=1,
           String... comments) {
 
    // We can check the type using if(is..) or switch/case(is..)
    // as shown below.
    // Note that a non-variable attribute must be initialized
    // exactly once, but not necessarily in the same line:
    String name;
    switch (product)
    case (is Product) { name = product.name; }
    case (is String) { name = product; }
 
    print("Order product '" name "', count: " count "");
    for (c in comments) {
        print("  Comment: '" c "'");
    }
}

order(polly, 28, "I like birds");