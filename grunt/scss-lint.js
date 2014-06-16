module.exports = function (grunt) {
  grunt.config('scsslint', {
    all: [
      'assets/css/*.scss',
      'assets/css/**/*.scss'
    ]
  });
  grunt.loadNpmTasks('grunt-scss-lint');
};
