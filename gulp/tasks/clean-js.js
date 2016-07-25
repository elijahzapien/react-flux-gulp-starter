var gulp = require('gulp');
var del = require('del');

var config = require('../config').cleanJS;

gulp.task('clean-js', function() {
    del.sync(config.patterns, config.settings);
});
