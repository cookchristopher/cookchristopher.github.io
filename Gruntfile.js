module.exports = function (grunt) {
  require('time-grunt')(grunt);

  grunt.loadTasks('grunt');

  grunt.registerTask('default', 'lint and watch for changes', [
    'clean',
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
    'lint',
    'compass',
    'cssmin',
    'copy',
    'buildcontrol'
  ]);
};
