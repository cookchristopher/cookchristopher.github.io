module.exports = function (grunt) {
  grunt.config('copy', {
    prod: {
      files: [
        {
          src: [
            'CNAME',
            'index.html',
            'README.md',
            'assets/css/main.css',
            'assets/img/sprite-*.png'
          ],
          dest: 'dist/'
        }
      ]
    }
  });
  grunt.loadNpmTasks('grunt-contrib-copy');
};
