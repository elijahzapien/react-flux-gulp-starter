var gulp = require('gulp');
var changed = require('gulp-changed');
var config = require('../config').assets;
var src = [config.src].concat(config.exclusions);

var taskDef = function () {
    return gulp.src(src)
        .pipe(changed(config.dest)) // Ignore unchanged files
        .pipe(gulp.dest(config.dest))
};

module.exports = taskDef;

gulp.task('assets', taskDef);
