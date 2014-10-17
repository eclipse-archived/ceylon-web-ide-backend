import ceylon.language.meta.declaration {
    ValueDeclaration
}
shared void run() {
    for (dec in `class String`.memberDeclarations<ValueDeclaration>()) {
        print(dec);
    }
}
