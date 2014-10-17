//$webrun_wrapped
shared void run(){
void order(String product, Integer count=1, Float discount=0.0,
          {String*} comments={}) {
    String commentStr = ", ".join { for (c in comments) "'``c``'" };
    print("Order '``product``', quantity ``count``, discount ``
            discount``, comments: ``commentStr``");
}

// Ceylon has an alternative syntax for invoking functions or
// class initializers, which references the parameters by name.
order { product = "Mouse"; };
order { product = "Rhinoceros"; discount = 10.0; };
order { product = "Bee"; count = 531;
        "Express delivery", "Send individually" };

// This syntax is especially useful for defining treelike object
// structures. For instance for the following classes:
class Product(String name, Float price, String description=name,
              Float shippingCosts=0.0) {/*...*/}
class Group(String name, {Product*} products) {/*...*/}
class Stock({Group*} groups) {/*...*/}

// We can write the data in a way that's similar to JSON or XML:
Stock stock = Stock {
    Group {
        name = "Animals";
        Product {
            name = "Elephant";
            price = 9.99;
            description = "Color: gray";
        },
        Product {
            name = "Mouse";
            price = 120.00;
        }
    },
    Group {
        name = "Food";
        Product {
            name = "Bird seed";
            price = 4.99;
        }
    }
};

// A list of items can be assigned to a sequenced parameter
// directly by name:
{Product*} toys = { /*...*/ };
Group toysGroup = Group { name = "Toys"; products = toys; };

// But we are not restricted to simple static data, like XML.
interface Formatter {
    shared formal String format(String text);
}
class Button(String text, Anything()? onClick=null,
             Formatter? formatter=null) {
    shared void doClick() { if (exists onClick) {onClick();} }
}
Button button = Button {
    text = "order";
    // Streamlined syntax for specifying function arguments:
    void onClick() {
        order("Elephant");
    }
    // An argument can be specified as object declaration:
    object formatter satisfies Formatter {
        // Shortcut syntax for implementing a formal member:
        format(String text) => "<b>``text``</b>";
    }
};
button.doClick();
}
