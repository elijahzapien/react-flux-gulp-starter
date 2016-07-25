var gulp = require('gulp');
var changed = require('gulp-changed');

var config = require('../config').assets;
var src = [config.src].concat(config.exclusions);

gulp.task('assets', function() {
    return gulp.src(src)
        .pipe(changed(config.dest))
        .pipe(gulp.dest(config.dest))
});
