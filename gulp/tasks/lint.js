var config = require('../config').lint;
var gulp = require('gulp');

// jshint
// ==========
//var jshint = require('gulp-jshint');
//var stylish = require('jshint-stylish');
/*gulp.task('lint', function() {*/
    //return gulp.src(config.src)
        //.pipe(jshint(config.settings))
        //.pipe(jshint.reporter(stylish));
/*});*/

// eslint
// ==========
var eslint = require('gulp-eslint');

gulp.task('lint', function() {
    return gulp.src(config.src)
        .pipe(eslint(config.configFile))
        .pipe(eslint.format(config.format))
});
