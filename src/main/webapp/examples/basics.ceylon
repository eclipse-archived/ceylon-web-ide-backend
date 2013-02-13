// Any object can be converted to a string using ".string".
// There are no special primitive types, even numbers are objects.
Integer i = 3;
String s = i.string;

doc "Declarations can be documented using the `doc` annotation.
     Note that string literals can span several lines."
Boolean b = (i == 3);

// An attribute annotated "variable" can be re-assigned after it
// has been initialized.
variable Float f = 0.3;
f = 2.0^0.5; // exponentiation

// String templates can be used to compose strings. They must
// start and end with a string literal.
print("The square root of 2 is ``f``");

// With the "value" keyword the type is inferred by the compiler.
value t1 = process.milliseconds;
print(className(t1));

// some control structures:
while (f < 1_000_000.0) {
    for (j in 1..10) {
        if (j%3 == 1) {
            f /= j+1;
        }
        else {
            f *= j+2;
        }
    }
}
print("f=``f`` (``process.milliseconds-t1``ms)");