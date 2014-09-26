"You can define a dynamic interface, so you can use
 conformant instances outside of dynamic blocks"
dynamic DataHolder {
  "This interface defines a dynamic member,
   which can only be used inside dynamic blocks"
  shared formal dynamic data;
}

"Dynamic interfaces can satisfy other dynamic interfaces"
dynamic Node satisfies DataHolder {
  "This interface contains a typed member"
  shared formal Array<Node> children;
}

"This function creates a dynamic object and returns it
 as a Node. The returned object will have the necessary
 type information added to it so that it can behave as
 a Node."
Node createNode(Node? k2) {
  dynamic {
    dynamic k1 = dynamic[data="A child.";children=[];];
    dynamic r = dynamic[
      data=dynamic[a=1;b="2";];
      children=dynamic[k1];
    ];
    if (k2 exists) {
      r.children.push(k2);
    }
    return r;
  }
}

"Here, n will be of type Node"
value n = createNode(null);
print("It's a Node: ``className(n)``");
print("Should have one child: ``n.children.size``");
"n will also be of type Node"
assert(exists k=n.children[0]);
print("Should have no children: ``k.children.size==0``");
//The "data" member can only be accessed inside dynamic blocks
dynamic {
  print("Data of first child: ``k.data``");
}
print("Next child should be null: ``n.children[1] else "NULL"``");
