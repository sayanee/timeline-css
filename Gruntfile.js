'use strict';

module.exports = function (grunt) {

  grunt.initConfig({

    clean: {
      all: [
        'css/*.css',
        'scss/*.scss'
      ]
    },

    compass: {
      expanded: {
        options: {
          specify: 'sass/timeline.sass',
          cssPath: 'css',
          outputStyle: 'expanded',
          noLineComments: true
        }
      }
    },

    jsonlint: {
      all: {
        src: [
          'bower.json',
          'package.json'
        ]
      }
    },

    shell: {
      sassToScss: {
        options: {
            stdout: true
        },
        command: 'sass-convert sass/timeline.sass --from sass --to scss >> scss/timeline.scss && sass-convert sass/timeline-mixin.sass --from sass --to scss >> scss/timeline-mixin.scss'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', [
    'clean',
    'jsonlint',
    'compass',
    'shell'
  ]);

};
