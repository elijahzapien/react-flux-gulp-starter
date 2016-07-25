var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var config = require('../config').browserify;
var handleErrors = require('../util/handle-errors');

gulp.task('browserify', function() {
    return browserify([config.src], config.settings).bundle()
        .pipe(source('app.js'))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.dest));
});
