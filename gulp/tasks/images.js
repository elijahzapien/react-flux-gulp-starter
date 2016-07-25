var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');

var config = require('../config').images;

gulp.task('images', ['sass'], function() {
    return gulp.src(config.src)
        .pipe(changed(config.dest))
        .pipe(imagemin())
        .pipe(gulp.dest(config.dest));
});
