

module.exports = function(grunt){
  grunt.initConfig({
    jshint: {
      files: '*.js'
    },
    jasmine: {
      pivotal: {
        src: ['js/*.js', 'app.js']
      }
  }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  // grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('default', ['jshint', 'jasmine']);
};
