// Operators are associated to specific interfaces. A type that
// satisfies such an interface can be used with the respective
// operators.
class Product(String name, Float price)
            satisfies Comparable<Product> {
    shared actual String string = name;
        shared actual Comparison compare(Product other) {
        return price <=> other.price;
    }
}

// Now we can use comparison operators with Products:
value frog = Product("Frog", 16.0);
value bee = Product("Bee", 0.50);
void cmp(Product x, Product y) {
  if (x < y) { print("" x " < " y ""); }
  if (x > y) { print("" x " > " y ""); }
  else { print("" x " == " y ""); }
}
cmp(frog, bee);