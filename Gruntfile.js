module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  function loadConfig(path) {
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync('*', {cwd: path}).forEach(function(option) {
      key = option.replace(/\.js$/,'');
      object[key] = require("grunt-contrib-" + key);
    });

    return object;
  }

  var config = {
    pkg: grunt.file.readJSON('package.json'),
    env: process.env
  };

  grunt.loadTasks('tasks');

  grunt.util._.extend(config, loadConfig('tasks/options/'));

  grunt.initConfig(config);


  grunt.registerTask('javascripts', ['jshint', 'concat', 'uglify']);
  grunt.registerTask('stylesheets', ['sass']);

  // Default Task is basically a rebuild
  grunt.registerTask('default', ['javascripts', 'stylesheets']);


};