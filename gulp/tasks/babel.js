var config = require('../config').babel;
var handleErrors = require('../util/handle-errors');
var gulp = require('gulp');
var babel = require('gulp-babel');

/**
 * Settings defined in .babelrc
 */

gulp.task('babel', function() {
    return gulp.src(config.src)
        .pipe(babel())
        .on('error', handleErrors)
        .pipe(gulp.dest(config.dest));
});
