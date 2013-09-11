Package.describe({
    summary: "\u001b[32mv0.3.0 (under development)\n"+
         "\u001b[33m-----------------------------------------\n"+
         "\u001b[0m Filesystem for Meteor, collectionFS      \n"+
         "\u001b[0m                                          \n"+
         "\u001b[33m-------------------------------------RaiX\n"
});

Package.on_use(function(api) {
  "use strict";
  api.use(['deps', 'underscore', 'templating', 'handlebars', 'mongo-livedata']);

  api.export && api.export('CollectionFS');

  api.add_files([ 'myConsole.js' ], [ 'client', 'server' ]);

  api.add_files([
    'FileSaver.js',
    'collectionFS_templates.html',
    'collectionFS_client.js',
    'collectionFS_client.api.js',
    'collectionFS_client.api.fileobject.js',
    'collectionFS_handlebars.js'
  ], 'client');

  api.add_files([
    'collectionFS_filesystem.js',
    'collectionFS_server.js',
    'collectionFS_filehandlers.js',
    'collectionFS_server.api.js',
    'collectionFS_server.api.fileobject.js'
  ], 'server');

  api.add_files([
    'collectionFS_utillity.js',
    'collectionFS_common.js',
    'collectionFS_common.api.fileobject.js',
    'numeral.js'
  ], ['client', 'server']);

});
