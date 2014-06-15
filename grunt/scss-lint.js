module.exports = function (grunt) {
  grunt.config('scsslint', {
    all: [
      'assets/css/*.scss',
      'assets/css/**/*.scss'
    ],
    options: {
      reporterOutput: 'report/scss-lint-report.xml'
    }
  });
  grunt.loadNpmTasks('grunt-scss-lint');
};
