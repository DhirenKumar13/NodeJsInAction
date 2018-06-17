#=======================================================================================================#

PS E:\NodeJsWorkspace\notes-node> node app.js read
Module notes.js
Process Argv :  [ 'C:\\Program Files\\nodejs\\node.exe',
  'E:\\NodeJsWorkspace\\notes-node\\app.js',
  'read' ]
Command Entered is :  read
Yargs Command Entered is :  { _: [ 'read' ], help: false, version: false, '$0': 'app.js' }
Entered Command is :  read

#=======================================================================================================#

PS E:\NodeJsWorkspace\notes-node> node app.js remove --title="Mathematics"
Module notes.js
Process Argv :  [ 'C:\\Program Files\\nodejs\\node.exe',
  'E:\\NodeJsWorkspace\\notes-node\\app.js',
  'remove',
  '--title=Mathematics' ]
Command Entered is :  remove
Yargs Command Entered is :  { _: [ 'remove' ],
  help: false,
  version: false,
  title: 'Mathematics',
  '$0': 'app.js' }
Entered Command is :  remove

#=======================================================================================================#

PS E:\NodeJsWorkspace\notes-node> node app.js remove --title "Mathematics"
Module notes.js
Process Argv :  [ 'C:\\Program Files\\nodejs\\node.exe',
  'E:\\NodeJsWorkspace\\notes-node\\app.js',
  'remove',
  '--title',
  'Mathematics' ]
Command Entered is :  remove
Yargs Command Entered is :  { _: [ 'remove' ],
  help: false,
  version: false,
  title: 'Mathematics',
  '$0': 'app.js' }
Entered Command is :  remove

#=======================================================================================================#

PS E:\NodeJsWorkspace\notes-node> node app.js remove --title="Mathematics"
Module notes.js
Process Argv :  [ 'C:\\Program Files\\nodejs\\node.exe',
  'E:\\NodeJsWorkspace\\notes-node\\app.js',
  'remove',
  '--title=Mathematics' ]
Command Entered is :  remove
Yargs Command Entered is :  { _: [ 'remove' ],
  help: false,
  version: false,
  title: 'Mathematics',
  '$0': 'app.js' }
Entered Command is :  remove

#=======================================================================================================#

PS E:\NodeJsWorkspace\notes-node> node app.js remove --title "Mathematics"
Module notes.js
Process Argv :  [ 'C:\\Program Files\\nodejs\\node.exe',
  'E:\\NodeJsWorkspace\\notes-node\\app.js',
  'remove',
  '--title',

  #=======================================================================================================#

PS E:\NodeJsWorkspace\notes-node> node app.js add --title "Mathematics" --body "It is quite boring"Module notes.jsProcess Argv :  [ 'C:\\Program Files\\nodejs\\node.exe',
  'E:\\NodeJsWorkspace\\notes-node\\app.js',
  'add',
  '--title',
  'Mathematics',
  '--body',
  'It is quite boring' ]Command Entered is :  addYargs Command Entered is :  { _: [ 'add' ],
  help: false,
  version: false,
  title: 'Mathematics',
  body: 'It is quite boring',
  '$0': 'app.js' }
Entered Command is :  add
Adding note : Mathematics It is quite boring

#=======================================================================================================#

PS E:\NodeJsWorkspace\notes-node> node app.js add --title "Mathematics" --body "It is quite boring subject"
Module notes.js
Yargs Command Entered is :  { _: [ 'add' ],
  help: false,
  version: false,
  title: 'Mathematics',
  body: 'It is quite boring subject',
  '$0': 'app.js' }
Entered Command is :  add
Adding note : Mathematics It is quite boring subject

#=======================================================================================================#

PS E:\NodeJsWorkspace\notes-node> node app.js list
Module notes.js
Yargs Command Entered is :  { _: [ 'list' ], help: false, version: false, '$0': 'app.js' }
Getting all notes
Entered Command is :  list

#=======================================================================================================#

PS E:\NodeJsWorkspace\notes-node> node app.js read --title "Java For Begineers"
Module notes.js
Yargs Command Entered is :  { _: [ 'read' ],
  help: false,
  version: false,
  title: 'Java For Begineers',
  '$0': 'app.js' }
Getting the notes for :  Java For Begineers
Entered Command is :  read

#=======================================================================================================#

PS E:\NodeJsWorkspace\notes-node> node app.js remove --title "Java For Begineers"
Module notes.js
Yargs Command Entered is :  { _: [ 'remove' ],
  help: false,
  version: false,
  title: 'Java For Begineers',
  '$0': 'app.js' }
Removing the notes for :  Java For Begineers
Entered Command is :  remove

#=======================================================================================================#

PS E:\NodeJsWorkspace\notes-node> node app.js list
Module notes.js
Yargs Command Entered is :  { _: [ 'list' ], help: false, version: false, '$0': 'app.js' }
Getting all notes ...
Entered Command is :  list

#=======================================================================================================#

PS E:\NodeJsWorkspace\notes-node\playground> node json.js
obj type is :  object
jsonString type is :  string
{"name":"Dhiren"}
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
personObj type is :  object
jsonString type is :  string
{ name: 'Dhiren', age: 24 }
Name of person :  Dhiren
Age of person :  24

#=======================================================================================================#

PS E:\NodeJsWorkspace\notes-node\playground> node .\actual-json.js
object
Title :  TitleGoesHere
Body :  Here is the content

#=======================================================================================================#

PS E:\NodeJsWorkspace\notes-node> node app.js add --title "Secret3" --body "Content Goes Here Again"
Module notes.js
Yargs Command Entered is :  { _: [ 'add' ],
  help: false,
  version: false,
  title: 'Secret3',
  body: 'Content Goes Here Again',
  '$0': 'app.js' }
Entered Command is :  add
Adding note :  Secret3 Content Goes Here Again
Already a note exists with title :  Secret3
Already a note exists with title :  Secret3
Already a note exists with title :  Secret3

#=======================================================================================================#

PS E:\NodeJsWorkspace\notes-node> node app.js remove --title "Secret2"
Module notes.js
Yargs Command Entered is :  { _: [ 'remove' ],
  help: false,
  version: false,
  title: 'Secret2',
  '$0': 'app.js' }
Removing the notes for :  Secret2
Entered Command is :  remove

#=======================================================================================================#

PS E:\NodeJsWorkspace\notes-node> node app.js remove --title "Secret30"
Module notes.js
Yargs Command Entered is :  { _: [ 'remove' ],
  help: false,
  version: false,
  title: 'Secret30',
  '$0': 'app.js' }
Removing the notes for :  Secret30
Entered Command is :  remove
Note doesn't exist with title :  Secret30

#=======================================================================================================#

PS E:\NodeJsWorkspace\notes-node> node app.js remove --title "Secret1"
Module notes.js
Yargs Command Entered is :  { _: [ 'remove' ],
  help: false,
  version: false,
  title: 'Secret1',
  '$0': 'app.js' }
Removing the notes for :  Secret1
Entered Command is :  remove
Note deleted with title :  Secret1

#=======================================================================================================#

PS E:\NodeJsWorkspace\notes-node> node app.js read --title "Secret1"
Module notes.js
Yargs Command Entered is :  { _: [ 'read' ],
  help: false,
  version: false,
  title: 'Secret1',
  '$0': 'app.js' }
Entered Command is :  read
Getting the notes for :  Secret1
Returned notes is :  { title: 'Secret1', body: 'Content Goes Here Again' }

#=======================================================================================================#

PS E:\NodeJsWorkspace\notes-node> node app.js read --title "Secret3"
Module notes.js
Yargs Command Entered is :  { _: [ 'read' ],
  help: false,
  version: false,
  title: 'Secret3',
  '$0': 'app.js' }
Entered Command is :  read
Getting the notes for :  Secret3
Notes not found with title :  Secret3

#=======================================================================================================#

PS E:\NodeJsWorkspace\notes-node> node .\playground\arrow-function.js
10000
100
{ '0': {},
  '1':
   { [Function: require]
     resolve: { [Function: resolve] paths: [Function: paths] },
     main:
      Module {
        id: '.',
        exports: {},
        parent: null,
        filename: 'E:\\NodeJsWorkspace\\notes-node\\playground\\arrow-function.js',
        loaded: false,
        children: [],
        paths: [Array] },
     extensions: { '.js': [Function], '.json': [Function], '.node': [Function] },
     cache:
      { 'E:\NodeJsWorkspace\notes-node\playground\arrow-function.js': [Object] } },
  '2':
   Module {
     id: '.',
     exports: {},
     parent: null,
     filename: 'E:\\NodeJsWorkspace\\notes-node\\playground\\arrow-function.js',
     loaded: false,
     children: [],
     paths:
      [ 'E:\\NodeJsWorkspace\\notes-node\\playground\\node_modules',
        'E:\\NodeJsWorkspace\\notes-node\\node_modules',
        'E:\\NodeJsWorkspace\\node_modules',
        'E:\\node_modules' ] },
  '3': 'E:\\NodeJsWorkspace\\notes-node\\playground\\arrow-function.js',
  '4': 'E:\\NodeJsWorkspace\\notes-node\\playground' }
Hi undefined
{ '0': 1, '1': 2, '2': 3 }
Hi Dhiren

#=======================================================================================================#



#=======================================================================================================#



#=======================================================================================================#