module.exports = function (grunt) {
  var config = {},
      targets;

  targets = [
    'icons'
  ];

  targets.forEach(function (target) {
    config[target] = {
      src: ['assets/img/' + target + '/*.png'],
      destImg: 'assets/img/sprite-' + target + '.png',
      imgPath: '../img/sprite-' + target + '.png',
      destCSS: 'assets/sass/sprites/_sprite-' + target + '.scss',
      cssTemplate: 'assets/sass/template.mustache',
      engine: 'pngsmith',
      cssOpts: {
        target: target
      }
    };
  });

  grunt.config('sprite', config);
  return grunt.loadNpmTasks('grunt-spritesmith');
};
