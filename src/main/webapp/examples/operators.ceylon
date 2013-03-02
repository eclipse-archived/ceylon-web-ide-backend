// Operators are associated to specific interfaces. A type that
// satisfies such an interface can be used with the respective
// operators.
class Product(String name, Float price)
            satisfies Comparable<Product> {
    shared actual String string = name;
    shared actual Comparison compare(Product other)
            => price <=> other.price;
    shared actual Boolean equals(Object other) {
        if (is Product other) { return price==other.price; }
        return false;
    }
    shared actual Integer hash => price.hash;
}

// Now we can use comparison operators with Products:
value frog = Product("Frog", 16.0);
value bee = Product("Bee", 0.50);
void cmp(Product x, Product y) {
    if (x < y) { print("``x`` < ``y``"); }
    else if (x > y) { print("``x`` > ``y``"); }
    else { print("``x`` == ``y``"); }
}
cmp(frog, bee);

// alternative version:
void cmp2(Product x, Product y) {
    switch (x <=> y)
    case (smaller) { print("``x`` < ``y``"); }
    case (larger) { print("``x`` > ``y``"); }
    case (equal) { print("``x`` == ``y``"); }
}
cmp(bee, frog);