module.exports = function (grunt) {
  grunt.config('jscs', {
    all: {
      files: {
        src: ['<%= jshint.all %>']
      },
      options: {
        config: '.jscs.json',
        reporter: 'junit',
        reporterOutput: 'report/jscs-output.xml',
      }
    }
  });
  grunt.loadNpmTasks('grunt-jscs-checker');
};
