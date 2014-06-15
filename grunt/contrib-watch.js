module.exports = function (grunt) {
  grunt.config('watch', {
    compass: {
      files: [
        '<%= compass.dev.options.sassDir %>/**/*.scss'
      ],
      tasks: [
        'scsslint',
        'compass:dev'
      ]
    },
    css: {
      files: [
        'assets/css/*.css',
      ],
      options: {
        livereload: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
