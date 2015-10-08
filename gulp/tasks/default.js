var gulp = require('gulp');

gulp.task('default', ['images', 'assets', 'minify-html', 'sass', 'browserify', 'watch', 'server']);

