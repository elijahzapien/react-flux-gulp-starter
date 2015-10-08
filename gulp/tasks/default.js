var gulp = require('gulp');

gulp.task('default', ['images', 'assets', 'minify-html', 'sass', 'lint', 'browserify', 'watch', 'server']);

