module.exports = function (grunt) {
  grunt.config('uncss', {
    dev: {
      src: ['index.html'],
      dest: 'assets/css/main.css'
    }
  });
  grunt.loadNpmTasks('grunt-uncss');
};
