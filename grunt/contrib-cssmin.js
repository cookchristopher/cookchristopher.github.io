module.exports = function (grunt) {
  grunt.config('cssmin', {
    prod: {
      files: {
        'assets/css/main.css': ['assets/css/main.css']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
};
