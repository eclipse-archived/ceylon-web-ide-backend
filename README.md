Ceylon Web IDE
==============

This is a web-based IDE for writing and testing [Ceylon][]
modules, itself written in pure Ceylon, with the following
features:

- code editor based on [Code Mirror][]
- support for editing Ceylon, JavaScript, and MarkDown
- syntax highlighting
- live error reporting
- autocompletion
- online documentation "hover"
- run and stop
- multi-file support ("Advanced" mode)
- support for importing modules from [Ceylon Herd][]
- persistence to [Gist][] and sharing 
- light and dark editor themes

The Web IDE is used in production at <http://try.ceylon-lang.org>.

[Ceylon]: http://ceylon-lang.org
[Ceylon Herd]: http://modules.ceylon-lang.org
[Code Mirror]: http://codemirror.net
[Gist]: http://gist.github.com

## The Web IDE as a technology demo

The module `com.redhat.ceylon.ide.web` found in the `source` 
directory demonstrates the use of Ceylon as language for 
server-side programming, including:

- the HTTP server and client APIs in `ceylon.net`
- JSON generation and parsing via `ceylon.json`
- interoperation with native Java libraries (the Ceylon
  typechecker and JavaScript compiler, and [txtmark][], a 
  Java MarkDown processor)
- Ceylon's powerful dependency management.

Furthermore, this project demonstrates deployment to the
[OpenShift][] platform via the [Ceylon cartridge][].

[txtmark]: https://github.com/rjeschke/txtmark
[OpenShift]: https://openshift.redhat.com
[Ceylon cartridge]: https://developers.openshift.com/en/ceylon-overview.html

## Compiling and running

Simplest with the Ceylon Bootstrap:

    ./ceylonb run --compile com.redhat.ceylon.ide.web

Or if you want you can first install the Ceylon [compiler][]
and then compile by going into the `ceylon-web-ide-backend`
directory, and typing:

    ceylon compile

Then to run the server, type:

    ceylon run com.redhat.ceylon.ide.web

Finally, go to:

<http://localhost:8080/>

To run the server on a different address and port, use:

    ceylon run com.redhat.ceylon.ide.web -address=<address> -port=<port>

[compiler]: http://ceylon-lang.org/download

## Running from Ceylon IDE

To run the project from [Ceylon IDE][], first use 
__File > Import...__ to import this project into the IDE, 
then select the module `com.redhat.ceylon.ide.web` in the 
Ceylon Explorer and, from the context menu, select 
__Run As > Ceylon Java Application__ or 
__Debug As > Ceylon Java Application__.

[Ceylon IDE]: http://ceylon-lang.org/documentation/current/ide/

## Deploying to OpenShift

You can deploy the server to [OpenShift][] via the web 
console or using the command line tool. If you've made 
changes to the code, you must first publish your fork of 
this project to a Git repository.

### Via the OpenShift web console

To deploy the server via the [OpenShift web console][]:

1. Click __Add Application...__
2. Click __Ceylon__ in the list of cartridge types.
3. Choose a __Public URL__, `ide`, or whatever you like, enter 
   the __Source Code__ URL
   <https://github.com/ceylon/ceylon-web-ide-backend.git>
   for branch `version-1.3.2-SNAPSHOT`,
   or the URL of your fork of this project.
4. Click __Create Application__ and wait for the application 
   to be deployed.

### Using rhc

To deploy the server with the `rhc` command line tool, first
install [rhc][], and then type:

    rhc app create ide\
    --from-code https://github.com/ceylon/ceylon-web-ide-backend.git\
    https://raw.github.com/ceylon/openshift-cartridge/master/metadata/manifest.yml

Replace the first URL with the URL of your fork of this 
project if necessary.

### Enabling GitHub authentication

Finally, you must set the environment variables 
`GITHUB_CLIENTID` and `GITHUB_CLIENTSECRET` in order to 
enable GitHub authentication. (If you skip this step,
everything else will still work, but you won't be able to
connect to Gist.)

First, [register your application with GitHub][register] to
obtain an OAuth Client ID and Client Secret.

Now use `rhc` to set the environment variables on the server:

    rhc env set GITHUB_CLIENTID=<Client-ID> GITHUB_CLIENTSECRET=<Client-Secret> -a ide

[OpenShift web console]: https://openshift.redhat.com/app/console
[rhc]: https://developers.openshift.com/en/managing-client-tools.html
[register]: https://github.com/settings/applications/new

## License

The content of this repository is released under the ASL v2.0
as provided in the LICENSE file that accompanied this code.

By submitting a "pull request" or otherwise contributing to 
this repository, you agree to license your contribution under 
the license mentioned above.
