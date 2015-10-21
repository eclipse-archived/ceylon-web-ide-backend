Ceylon Web Runner Backend
=========================

Right now this is an OpenShift project that implements a webservice that translates
Ceylon code into JavaScript.

To test the webservice locally a demo page exists which will allow you to run the
application on a local JBossAS 7 server. The demo uses the [ACE] (http://ace.ajax.org/) 
Cloud 9 editor.

To build this project you need Maven. Simply run:

    mvn package

And then deploy the resulting web-ide-backend-1.0.war to your JEE container.

Due to OpenShift restrictions, you must manually update to the lastest versions of
typechecker-0.1.jar, jscompiler-0.1.jar, and ceylon.language.js BEFORE packaging
the war. The ceylon.language.js must reside in:

    src/main/webapp/scripts/modules/ceylon/language/0.1/ceylon.language.js

The typechecker and jscompiler jars must reside in:

    src/main/webapp/WEB-INF/lib

You can get the latest typechecker.jar by building the ceylon-spec project and
copying the resulting jar from inside the `build/dist` directory, or from your Ceylon
repo at `.ceylon/repo/com/redhat/ceylon/typechecker` inside your home directory.

You can get the latest jscompiler.jar by building the ceylon-js project and copying
the resulting jar from `build/lib`; also from ceylon-js you can get the latest
ceylon.language.js file by building the project and copying it from
`build/runtime/ceylon/language/0.1`.

Updating the public OpenShift application (http://try.ceylon-lang.org) is done
simply by pushing any updated fils to the application's Git repository on OpenShift.

Right now this can only be done by Tako (@quintesse), or you need to supply him with
an SSH public key to give you push access to the application's Git repository.

## License

The content of this repository is released under the ASL v2.0
as provided in the LICENSE file that accompanied this code.

By submitting a "pull request" or otherwise contributing to this repository, you
agree to license your contribution under the license mentioned above.

