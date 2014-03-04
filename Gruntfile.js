module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({

    // webserver config
    connect: {
      server: {
        options: {
          port: 5001,
          base: 'public'
        }
      }
    }
  });

  // load external grunt tasks
  grunt.loadNpmTasks('grunt-contrib-connect');
};