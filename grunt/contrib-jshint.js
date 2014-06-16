module.exports = function (grunt) {
  grunt.config('jshint', {
    all: [
      'grunt/*.js',
      'Gruntfile.js'
    ],
    options: {
      jshintrc: '.jshintrc'
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
};
