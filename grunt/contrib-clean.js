module.exports = function (grunt) {
  grunt.config('clean', {
    all: ['assets/css']
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
};
