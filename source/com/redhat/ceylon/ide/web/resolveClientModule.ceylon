import com.redhat.ceylon.cmr.api {
    ArtifactContext {
        model=JS_MODEL,
        js=JS
    }
}

String? resolveClientModule(String path) {
    String type;
    if (path.endsWith(model)) {
        type = model;
    }
    else if (path.endsWith(js)) {
        type = js;
    }
    else {
        //TODO: what about resources?!
        return null;
    }
    assert (exists slash = path.lastOccurrence('/'),
            exists dash = path.firstOccurrence('-', slash));
    value name = path[slash+1..dash-1];
    value version = path[dash+1..path.size-1-type.size];
    value ac = ArtifactContext(name, version, type);
    return repositoryManager.getArtifact(ac)?.absolutePath;
}