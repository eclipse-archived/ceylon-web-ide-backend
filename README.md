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

[Ceylon]: http://ceylon-lang.org
[Ceylon Herd]: http://modules.ceylon-lang.org
[Code Mirror]: http://codemirror.net
[Gist]: http://gist.github.com

To compile the project, first install the Ceylon [compiler][], 
then go to the `ceylon-web-ide-backend` directory, and type:

    ceylon compile

To run the server, type:

    ceylon run com.redhat.ceylon.ide.web

Finally, go to:

<http://localhost:8080/ceylon-ide/>

To run the server on a different address and port, use:

    ceylon run com.redhat.ceylon.ide.web -address=<address> -port=<port>

[compiler]: http://ceylon-lang.org/download

## License

The content of this repository is released under the ASL v2.0
as provided in the LICENSE file that accompanied this code.

By submitting a "pull request" or otherwise contributing to 
this repository, you agree to license your contribution under 
the license mentioned above.

