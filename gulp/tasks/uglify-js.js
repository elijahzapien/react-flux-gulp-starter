var gulp = require('gulp');
var config = require('../config').production;
var size = require('gulp-filesize');
var uglify = require('gulp-uglify');

gulp.task('uglify-js', ['browserify'], function() {
    return gulp.src(config.jsSrc)
        .pipe(uglify())
        .pipe(gulp.dest(config.dest + '/js'))
        .pipe(size());
});
