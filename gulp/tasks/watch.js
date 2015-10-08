var config = require('../config');
var gulp = require('gulp');

gulp.task('watch', function(){
    gulp.watch(config.markup.src, ['minify-html']);
    gulp.watch(config.lint.src, ['lint','browserify']);
    gulp.watch(config.sass.src, ['sass']);
});
