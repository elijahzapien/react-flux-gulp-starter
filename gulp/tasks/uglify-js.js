var gulp = require('gulp');
var size = require('gulp-filesize');
var uglify = require('gulp-uglify');

var config = require('../config').production;

gulp.task('uglify-js', ['es2015-commonjs'], function() {
    return gulp.src(config.jsSrc)
        .pipe(uglify())
        .pipe(gulp.dest(config.dest + '/js'))
        .pipe(size());
});
