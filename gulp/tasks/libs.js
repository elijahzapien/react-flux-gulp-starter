var gulp = require('gulp');
var changed = require('gulp-changed');

var config = require('../config').libs;

gulp.task('libs', function() {
    return gulp.src(config.src)
        .pipe(changed(config.dest))
        .pipe(gulp.dest(config.dest))
});

