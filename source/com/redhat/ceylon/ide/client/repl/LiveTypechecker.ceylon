shared object live_tc {
	Integer timeout=3000;
	variable String status="disabled";
	variable String files = "";
	variable Integer last = system.milliseconds;

	shared Boolean shouldTypecheck() {
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
	shared void ready() {
		status = "ready";
	}
	shared void pause() {
		status = "paused";
	}
	shared void disable() {
		status = "disabled";
	}
	shared void update() {
		dynamic {
			files = JSON.stringify(getCompilerFiles());
		}
	}
	shared void postpone() {
		live_tc.last = system.milliseconds;
		if (status != "disabled") {
			ready();
		}
	}
	shared void done() {
		update();
		pause();
	}
	shared void now() {
		files = "";
		last = system.milliseconds - timeout - 1;
		ready();
	}
}
