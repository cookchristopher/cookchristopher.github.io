module.exports = function (grunt) {
  require('time-grunt')(grunt);

  grunt.loadTasks('grunt');

  grunt.registerTask('default', 'lint and watch for changes', [
    'sprite',
    'lint',
    'compass',
    'uncss',
    'watch'
  ]);

  grunt.registerTask('lint', 'lint JS & SCSS', function () {
    var tasks;

    tasks = [
      'jshint',
      'scsslint'
    ];

    grunt.task.run(tasks);
  });
};
