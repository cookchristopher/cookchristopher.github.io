module.exports = function (grunt) {
  require('time-grunt')(grunt);

  grunt.loadTasks('grunt');

  grunt.registerTask('default', 'lint and watch for changes', [
    'sprite',
    'compass:dev',
    'scsslint',
    'watch'
  ]);

  grunt.registerTask('lint', 'lint SCSS', function () {
    var tasks;

    tasks = [
      'scsslint'
    ];

    grunt.task.run(tasks);
  });
};
