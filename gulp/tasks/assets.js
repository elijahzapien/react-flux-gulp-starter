var gulp = require('gulp');
var changed = require('gulp-changed');
var browserSync = require('browser-sync');
var config = require('../config').assets;
var src = [config.src].concat(config.exclusions);

var taskDef = function () {
    return gulp.src(src)
        .pipe(changed(config.dest)) // Ignore unchanged files
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
};

module.exports = taskDef;

gulp.task('assets', taskDef);
