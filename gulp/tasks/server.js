var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var config = require('../config').nodemon;

gulp.task('server', function (cb) {
    var started = false;

    return nodemon(config)
        .on('start', function () {
            if (!started) {
                started = true;
                setTimeout(function () { cb(); }, 1000);
            }
        });
});
