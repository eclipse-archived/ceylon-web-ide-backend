shared interface LiveTypechecker {
    shared formal Boolean shouldTypecheck();
    shared formal void ready();
    shared formal void pause();
    shared formal void disable();
    shared formal void update();
    shared formal void postpone();
    shared formal void done();
    shared formal void now();
}

shared object live_tc satisfies LiveTypechecker {
    Integer timeout=3000;
    variable String status="disabled";
    variable String files = "";
    variable Integer last = system.milliseconds;
    
    shared actual Boolean shouldTypecheck() {
        if (status == "ready" && system.milliseconds-live_tc.last > live_tc.timeout) {
            dynamic {
                dynamic cfiles = getCompilerFiles();
                if (!jQuery.isEmptyObject(cfiles)) {
                    return JSON.stringify(cfiles) != files;
                }
            }
        }
        return false;
    }
    shared actual void ready() {
        status = "ready";
    }
    shared actual void pause() {
        status = "paused";
    }
    shared actual void disable() {
        status = "disabled";
    }
    shared actual void update() {
        dynamic {
            files = JSON.stringify(getCompilerFiles());
        }
    }
    shared actual void postpone() {
        live_tc.last = system.milliseconds;
        if (status != "disabled") {
            ready();
        }
    }
    shared actual void done() {
        update();
        pause();
    }
    shared actual void now() {
        files = "";
        last = system.milliseconds - timeout - 1;
        ready();
    }
}
