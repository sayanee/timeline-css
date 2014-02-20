'use strict';

module.exports = function (grunt) {

  grunt.initConfig({

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

  });


  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-jsonlint');

  grunt.registerTask('default', [
    'jsonlint',
    'compass'
  ]);

};
