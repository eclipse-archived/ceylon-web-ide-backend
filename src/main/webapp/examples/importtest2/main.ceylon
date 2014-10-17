import ceylon.collection { LinkedList }

void run() {
    value list = LinkedList{"Test 1", "Test 2"};
    list.add("Test 3");
    print(list);
}
