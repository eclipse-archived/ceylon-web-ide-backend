// The following is an error because null is not a String.
//String s = null;  //ERROR!

// We have to write "String?" instead:
String? s1 = null;
String? s2 = "This is a String.";

print(s1);
print(s2);

// But now we can't use it where a "String" is required:
//Integer len = s1.size;  //ERROR!

// We have to check for null using if(exists...):
if (exists s2) {
    // s2 is of type String here, not "String?"
    print("'``s2``' has length ``s2.size``");
}

// There are also special operators for handling null values:
String safe = s2 else "NULL!"; // use default value if s2 is null
Integer? len = s2?.size; // null if s2 is null
print("'``safe``' has length ``(len else 0)``");
print("'``s1 else "NULL!"``' has length ``s1?.size else 0``");

// The "else" operator can be combined with "then":
String? check = (10.0^0.5 > 3.0) then "ok"; // otherwise null
Integer i = safe.startsWith("This") then 1 else -1;
print("check='``check else "NULL!"``', i=``i``");

// Types are simultaneously checked and narrowed with if(is...):
Object o = s2 else "null";
if (is String o) {
    String s = o; // o has type String here!
    print(s);
}

// Union types express that the value can be of either type:
variable String|Integer x = "initial";
print("x has type ``className(x)``");
x = 5;
print("Now it has type ``className(x)``");
if (is Integer y = x) {
    print("y is an Integer with value ``y``");
}

// "String?" is just a shortcut for String|Null, where
// Null is the type of "null".
String|Null optional = s1; // equivalent to type "String?"
if (is Null optional) {
    print("optional is null");
}