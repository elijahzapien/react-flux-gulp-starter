var gulp = require('gulp');

var config = require('../config');

gulp.task('watch', function(){
    gulp.watch(config.markup.src, ['minify-html']);
    gulp.watch(config.lint.src, ['lint','browserify']);
    gulp.watch(config.sass.src, ['sass']);
});
