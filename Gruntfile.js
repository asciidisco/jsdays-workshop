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

    // patternprimer config
    patternprimer: {
      options: {
        wwwroot: 'patterns',
        css: ['http://localhost:5001/styles/style.css'],
        dest: 'docs'
      },
      live: {
        ports: [7020, 7030],
        src: 'patterns'
      },
      snapshot: {
        snapshot: true,
        src: 'patterns'
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
    },

    // execute shell commands for hardy & wraith
    shell: {
      wraith: {
        options: {
          stdout: true
        },
        command: 'wraith capture config'
      },
      setupHardy: {
        options: {
          stdout: true
        },
        command: 'hardy selenium start && sleep 2'       
      },
      hardy: {
        options: {
          stdout: true
        },
        command: 'hardy --browser=phantomjs test/hardy'
      },
      teardownHardy: {
        options: {
          stdout: true
        },
        command: 'hardy selenium stop'       
      },                         
    }

  });

  // hardy (using setup & teardown)
  grunt.registerTask('hardy', ['shell:setupHardy', 'shell:hardy', 'shell:teardownHardy']);

  // load external grunt tasks
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-patternprimer');
  grunt.loadNpmTasks('grunt-dalek');
  grunt.loadNpmTasks('grunt-shell');  
};