Ceylon WebIDE Backend
=====================

Right now this is an OpenShift project that implements a webservice that translates
Ceylon code into JavaScript.

To test the webservice locally a demo page exists which will allow you to run the
application on a local JBossAS 7 server. The demo uses the [ACE] (http://ace.ajax.org/) Cloud 9 editor.

Updating the public OpenShift application (http://repl-ceylon.rhcloud.com) is done
simply by pushing any updated fils to the application's Git repository on OpenShift.

Right now this can only be done by Tako (@quintesse), or you need to supply him with
an SSH public key to give you push access to the application's Git repository.

