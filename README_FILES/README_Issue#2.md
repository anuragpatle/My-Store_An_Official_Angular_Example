#1 Fixing the below error while upgrading it to the version 9 from version 7.

In short: I just ran the command npm install --ignore-scripts

The error was:

-------------------------------------------------------------------------------
gyp ERR! stack Error: Command failed: C:\Users\NNihalani\AppData\Local\Programs\Python\Python37\python.EXE -c import sys; print "%s.%s.%s" % sys.version_info[:3]

gyp ERR! stack   File "<string>", line 1

gyp ERR! stack     import sys; print "%s.%s.%s" % sys.version_info[:3];

gyp ERR! stack                                ^

gyp ERR! stack SyntaxError: invalid syntax

gyp ERR! stack

gyp ERR! stack     at ChildProcess.exithandler (child_process.js:294:12)

gyp ERR! stack     at ChildProcess.emit (events.js:198:13)

gyp ERR! stack     at maybeClose (internal/child_process.js:982:16)

gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:259:5)

gyp ERR! System Windows_NT 10.0.17134
gyp ERR! command "C:\\Program Files\\nodejs\\node.exe" "C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js"

  "rebuild"

gyp ERR! cwd C:\DevTools\openfin\layouts-service\node_modules\robotjs

gyp ERR! node -v v10.16.0

gyp ERR! not ok

-------------------------------------------------------------------------------

* How did it got fixed?

The layout service package includes the robotjs npm package, which has a dependency on the version of python installed locally.  The robotjs package is only required for the integration tests to run, which are not mandatory.

* Potential Causes
The version of Python installed locally is different to the version required by robotjs

* Troubleshooting steps:
Verify the version of Python installed locally (by typing 'python --version' into a shell) matches the version required by robotjs.

* Solutions
Run the Layout Service Demo without the integration tests
The Layout Service Integrations tests are not required to run the Layouts demo. To install the layout service without the robotjs:

Install the layout package using `npm install --ignore-scripts`


* Install the Python Version that is required by robotjs
Follow the instructions latest instructions on how to downgrade/upgrade the Python version listed on the Python.org website.

