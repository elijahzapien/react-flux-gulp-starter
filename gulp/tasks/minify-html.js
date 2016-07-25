var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');
var size = require('gulp-filesize');

var config = require('../config').markup;

gulp.task('minify-html', function() {
    return gulp.src(config.src)
        .pipe(minifyHTML({
            conditionals: true,
            spare: true
        }))
        .pipe(gulp.dest(config.dest))
        .pipe(size());
});

