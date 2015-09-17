//$webrun_wrapped
shared void run() {
"You can get the metamodel of a class like this"
value stringType = `String`;

print("class ``stringType``");
for (st in stringType.satisfiedTypes) {
    print("    satisfies ``st``");
}

"For types with type parameters,
 you need to specify the type arguments.
 This is called a closed type."
value listMeta = `List<String>`;
for (tp->arg in listMeta.typeArguments) {
    print("Type argument List.``tp.name`` = ``arg``");
}
"You can get the declaration instead of a class model"
value listDecl = `interface List`;
for (tp in listDecl.typeParameterDeclarations) {
    print("Type parameter List.``tp``");
}

"You can get a method by name"
value repeatMethod1 = `String.repeat`;
"Also by querying the class if you already have it"
value repeatMethod2 = stringType.getMethod<String,String,[Integer]>(
                          "repeat", `Integer`);
assert(exists repeatMethod2, repeatMethod1==repeatMethod2);
//You can inspect its properties
print("String method ``repeatMethod2``(``repeatMethod2.parameterTypes``)");
print("       type   ``repeatMethod2.type``");
"You can apply the method to an instance of the proper class"
value stars=repeatMethod2("*");
//Now you can use that directly as a function
for (i in 1..5) {
    print(stars(i));
}

"You can also work with attributes"
value upper1 = `String.uppercased`;
"Or query them from the class"
value upper2 = stringType.getAttribute<Integer>("uppercased");
assert(exists upper2, upper1==upper2);
//You can then use them like this
print(upper1("lower").get());

"And you can query members of a type by their annotations"
value nativeMethods = stringType.getMethods<String,Anything,Nothing>(
                          `NativeAnnotation`);
print([ for (m in nativeMethods)
            if (m.parameterTypes.size > 1) m.declaration.name]);
"You can do the same with attributes"
value sharedAttribs = stringType.getAttributes<String,Anything,Nothing>(
                          `SharedAnnotation`);
print([ for (a in sharedAttribs)
            if (a.type == stringType) a ]);
}
