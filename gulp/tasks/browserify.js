var config = require('../config').browserify;
var handleErrors = require('../util/handle-errors');
var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('browserify', function(){
    return gulp.src(config.src)
        .pipe(browserify(config.settings))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.dest));
});

