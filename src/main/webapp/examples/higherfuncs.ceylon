class SimpleClass() {
    shared String upper(Integer x) {
        return "INT " x "";
    }
}
//This function receives a function as argument
void higher(String f(Integer i)) {
    print(f(100));
}
value x = SimpleClass();
//Here we pass a reference to the "upper" method
higher(x.upper);
