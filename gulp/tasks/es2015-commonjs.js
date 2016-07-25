var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('es2015-commonjs', function(cb) {
    return runSequence(
        'babel',
        'browserify',
        'clean-js',
        cb);
});
