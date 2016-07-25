var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

var config = require('../config').sass;
var handleErrors = require('../util/handle-errors');

gulp.task('sass', function() {
    return gulp.src(config.src)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', handleErrors)
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(rename(config.rename))
        .pipe(gulp.dest(config.dest));
});

