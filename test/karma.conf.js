var path = require('path');
var fs = require('fs');

module.exports = function(karma) {
  var common = require('../../tools/test/karma-common.conf.js');
  var componentPath = path.normalize(__dirname + '/../');

  var preprocessors = {};
  preprocessors[componentPath + 'test/*.html'] = [];

  karma.set(common.mixin_common_opts(karma, {

    // base path, that will be used to resolve files and exclude
    basePath: '../../',

    preprocessors: preprocessors,

    // list of files / patterns to load in the browser  ORDER MATTERS
    files: [
      componentPath + 'tools/harness-utils.js',
      componentPath + 'tools/iframe-utils.js',
      componentPath + 'test/mocha.conf.js',
      'appmaker/public/vendor/polymer/polymer.min.js',
      'appmaker/public/vendor/mocha/mocha.js',
      'tools/test/chai/chai.js',
      componentPath + 'test/tests.js',
      {pattern: 'appmaker/public/ceci/*.html', included: false},
      {pattern: 'appmaker/public/ceci/test/fixtures/*.html', included: false},
      {pattern: componentPath + 'test/*.html', included: false},
      {pattern: componentPath + '*.html', included: false},
      {pattern: componentPath + '*.js', included: false},
      {pattern: componentPath + '*.css', included: false},
      {pattern: 'tools/**/*.js', included: false},
    ]
  }));
};
