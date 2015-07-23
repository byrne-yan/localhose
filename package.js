Package.describe({
  name: 'vamp:localhose',
  version: '0.0.1',
  summary: 'meteor package fork for https://github.com/jed/localhose.git',
  git: 'https://github.com/byrne-yan/localhose.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');

    //api.addFiles('index.js',['server']);
    api.addFiles('lib/localhose.js',['server']);

    api.export('localhose');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('vamp:localhose');
  api.addFiles('tests/localhose-tests.js');
});
