var config = require('../config').lint;
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var eslint = require('gulp-eslint');

/*gulp.task('lint', function() {*/
    //return gulp.src(config.src)
        //.pipe(jshint(config.settings))
        //.pipe(jshint.reporter(stylish));
/*});*/

gulp.task('lint', function() {
    return gulp.src(config.src)
        .pipe(eslint(config.settings))
        .pipe(eslint.format(config.format))
});
