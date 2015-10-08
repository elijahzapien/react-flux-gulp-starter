var gulp = require('gulp');

gulp.task('production', ['images', 'minify-css', 'uglify-js']);
