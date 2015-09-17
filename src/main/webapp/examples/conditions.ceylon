//$webrun_wrapped
shared void run() {
//You can use normal conditions as in any other language
value nums = 1..10;
if (nums.size == 10) {
  print("ok, normal condition");
}
if (nums.size == 10 && nums.first == 1) {
  print("another normal condition");
}

Object onums = nums;
//Sometimes you need to evaluate some condition
//before you can evaluate something else,
//this is common when doing type narrowing
if (is {Integer*} onums) {
    if (onums.size > 5) {
        print("Nested condition");
    }
}

//You can use special conditions, which are
//several different conditions each of which
//can depend on the previous ones.
//Type narrowing is done first, then the second
//condition is eval'd and onums is already {Integer*}
if (is {Integer*} onums,
        onums.size > 5) {
    print("Special condition");
}
if (is [Integer*] n=onums,
        exists third=n[2],
        third == 3) {
    print("Another special");
}

//Assertions throw an error if a condition is not met
try {
    "Doc an assertion and will be the message in the error thrown"
    assert(onums is Character);
} catch (AssertionError err) {
    print("Assertion was not met: ``err.message``");
}

//Assertions can also do type narrowing
assert(exists fifth=nums[4]);
//In this next line, fifth is already an Integer
print(fifth-2);

"You can also use special conditions with assertions"
assert(is [Anything*] onums,
       exists ultimo=onums.last);
print("last == ``ultimo``");
}
