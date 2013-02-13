void greet(String name="World") {
    print("Hello, ``name``!");
}
void shout(String? name) {
    greet( (name else "world" ).uppercased);
}
greet();
greet("yourself");
shout(null);
shout("yourself");
