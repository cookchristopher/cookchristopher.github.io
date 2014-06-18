module.exports = function (grunt) {
  grunt.config('compass', {
    dev: {
      options: {
        sassDir: 'assets/sass/',
        cssDir: 'assets/css',
        outputStyle: 'nested',
        noLineComments: false,
        debugInfo: false
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
};
