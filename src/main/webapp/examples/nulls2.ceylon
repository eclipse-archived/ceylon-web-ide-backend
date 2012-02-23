void greet(String? name) {
    print("Hello, " name ? "World" "!");
}
void shout(String? name) {
    greet(name?.uppercased);
}
greet(null);
greet("yourself");
shout(null);
shout("yourself");
