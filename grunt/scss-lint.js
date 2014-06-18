module.exports = function (grunt) {
  grunt.config('scsslint', {
    all: [
      'assets/sass/*.scss',
      'assets/sass/**/*.scss'
    ]
  });
  grunt.loadNpmTasks('grunt-scss-lint');
};
