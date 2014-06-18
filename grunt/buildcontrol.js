module.exports = function (grunt) {
  grunt.config('buildcontrol', {
    options: {
      dir: 'dist',
      commit: true,
      push: true,
      message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
    },
    development: {
      options: {
        remote: 'git@github.com:cookchristopher/cookchristopher.github.io.git',
        branch: 'gh-pages'
      }
    }
  });
  grunt.loadNpmTasks('grunt-build-control');
};
