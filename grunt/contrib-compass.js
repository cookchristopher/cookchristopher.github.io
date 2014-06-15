module.exports = function (grunt) {
  grunt.config('compass', {
    dev: {
      options: {
        sassDir: 'assets/css/',
        cssDir: '<%= compass.dev.options.sassDir %>',
        outputStyle: 'nested',
        noLineComments: false,
        debugInfo: false
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
};
