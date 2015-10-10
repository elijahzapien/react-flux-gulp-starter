var gulp = require('gulp');

gulp.task('default', ['images', 'libs', 'assets', 'minify-html', 'sass', 'lint', 'browserify', 'watch', 'server']);

