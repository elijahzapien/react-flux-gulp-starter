var gulp = require('gulp');
var eslint = require('gulp-eslint');

var config = require('../config').lint;

gulp.task('lint', function() {
    return gulp.src(config.src)
        .pipe(eslint(config.configFile))
        .pipe(eslint.format(config.format))
});
