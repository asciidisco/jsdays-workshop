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
    },

    // dalekjs config
    dalek: {
      options: {
        reporter: ['html'],
        dalekfile: false
      },
      phantom: {
        src: ['test/dalek/*.js']
      },
      chrome: {
        options: {
          browser: ['chrome']
        },
        src: ['test/dalek/*.js']    
      }
    }    
  });

  // load external grunt tasks
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-dalek');
};