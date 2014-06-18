module.exports = function (grunt) {
  require('time-grunt')(grunt);

  grunt.loadTasks('grunt');

  grunt.registerTask('default', 'lint and watch for changes', [
    'clean',
    'sprite',
    'lint',
    'compass',
    'watch'
  ]);

  grunt.registerTask('lint', 'lint JS & SCSS', [
    'jshint',
    'jscs',
    'scsslint'
  ]);

  grunt.registerTask('build', 'build for deployment', [
    'clean',
    'sprite',
    'lint',
    'compass',
    'cssmin'
  ]);
};
