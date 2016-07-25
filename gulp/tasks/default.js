var gulp = require('gulp');

gulp.task('default',
    [
        'images',
        'libs',
        'assets',
        'minify-html',
        'sass',
        'lint',
        'es2015-commonjs',
        'watch',
        'server'
    ]);
