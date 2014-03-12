module.exports = {
  options: {
    livereload: true,
  },
  scripts: {
    files: ['javascripts/src/*.js'],
    tasks: ['jshint', 'concat', 'uglify'],
    options: {
      spawn: false,
    }
  },
  css: {
    files: ['stylesheets/src/*.scss'],
    tasks: ['sass', 'autoprefixer', 'cssmin'],
    options: {
      spawn: false,
    }
  }
  }
}