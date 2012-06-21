doc "This interface represents a customer of the shop."
interface Customer {
 
    doc "The name of the customer."
    shared formal String name;
 
    // Interfaces may define concrete implementations of methods
    // and getters/setters.
    shared default String description {
       return "'" name "'";
    }
  
    // But in contrast to classes an interface can't contain
    // initialization code. The following is not allowed:
    //print(name); //ERROR!
    //shared variable Integer attr := 0; //ERROR!
}

// A class can satisfy one or more interfaces:
class SimpleCustomer(name) satisfies Customer {
    shared actual String name;
    // Note that we don't have to implement "description" here.
}
 
value batman = SimpleCustomer("Batman");
print("Customer: " batman.description "");
 
// Interfaces also can satisfy one or more parent interfaces.
interface RegisteredCustomer satisfies Customer {
 
    doc "The unique customer ID"
    shared formal Integer id;
 
    // Override the inherited default implementation.
    shared actual default String description {
       return "'" name "' (#" id ")";
    }
}

// A second specialization of the Customer interface
interface CartOwner satisfies Customer {
 
    doc "Number of items in the shopping cart"
    shared formal Integer numberOfItems;
 
    // Again, we override the inherited implementation
    shared actual default String description {
       return "'" name "' (" numberOfItems " items)";
    }
 
    doc "The customer buys the items in the cart."
    shared default void checkOut() {
       print("'" name "' buys " numberOfItems " items.");
    }
}

// Now we define a class which satisfies both specializations of
// the Customer interface.
class PetShopCustomer(id, name)
            satisfies RegisteredCustomer & CartOwner {
 
    shared actual Integer id;
    shared actual String name;
 
    // It is allowed to implement/override a non-variable
    // attribute with a variable attribute.
    shared actual variable Integer numberOfItems := 0;
   
    // This class inherits a "description" attribute from two
    // different types! That's allowed because both override the
    // same original declaration in Customer. However, the
    // compiler forces us to override it again here to avoid any
    // ambiguity.
    shared actual String description {
       return "'" name "' (#" id ", " numberOfItems " items)";
    }
 
    // Unless specified otherwise, classes extend
    // IdentifiableObject. We can override the members inherited
    // from that class: equals, hash and string.
    shared actual Boolean equals(Object other) {
        if (is PetShopCustomer other) {
            return other.id == id;
        }
        return false;
    } 
    shared actual Integer hash = id;
    shared actual String string = description;
}
 
value catwoman = PetShopCustomer(1, "Catwoman");
print("Customer: " catwoman ""); // automatically uses ".string"
catwoman.numberOfItems := 3;
catwoman.checkOut();