// A constant, read-only sequence of values:
String[] animals = [ "elephant", "parrot", "giraffe" ];
String[] none = {}; // empty sequence

// Accessing the sequence returns an optional value (String?)
print("First: ``animals.first else "none"``");
print("Second: ``animals[1] else "none"``");
print("Fourth: ``animals[3] else "none"``");

// Check if the sequence in non-empty:
if (nonempty animals) {
    // Now ".first" and ".last" return String:
    print("First: ``animals.first``");
    print("Last: ``animals.last``");
}

print("Is {} non-empty: ``none nonempty``");

// Output the elements comma-seperated in one line:
if (nonempty animals) {
    process.write(animals.first);
    for (animal in animals.rest) {
        process.write(", ``animal``");
    }
    process.write(process.newline);
}

// A String is a sequence of characters:
for (Character c in "cat") {//or shorter: for (c in "cat")
    print(c);
}

void list(Object* items) {
    // "items" is an Iterable
    variable Integer index = 0;
    for (item in items) {
        print("``++index``.``item.string``");
    }
}
list("cat", "bat");

// We can "spread" a sequence, passing its values as arguments:
list(*animals);

// Simpler way to print the elements comma-separated:
print(", ".join(animals));

// "entries" creates a sequence of entries (type Integer->String)
for (i->animal in entries(animals)) {
    print("``i+1``.``animal``");
}

// Implementing an iterator is simple in Ceylon:
class LengthsIterator(String* strings)
                    satisfies Iterator<Integer> {
    value it = strings.iterator();

    // next() returns "finished" (type Finished) if there are
    // no more values
    shared actual Integer|Finished next() {
        if (is String s = it.next()) { return s.size; }
        return finished;
    }
}

// Now we can implement our own simple Iterable:
class Lengths(String* strings) satisfies Iterable<Integer> {
    shared actual Iterator<Integer> iterator()
            => LengthsIterator(*strings);
}
for (len in Lengths(*animals)) {
    print("length: ``len``");
}

// With a sequence comprehension we can produce the same result:
{Integer*} lengths = { for (a in animals) a.size };
for (len in lengths) { print("length: ``len``"); }

// Sequence comprehension as input to a sequenced parameter:
list(for (a in animals) a+" egg");

// Comprehension with nested loop and condition:
list(for (i in 1..3) for (j in 1..3) if ((i+j)%2 == 0) i*j);