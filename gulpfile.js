'use strict';
var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    scss = require('gulp-scss');

gulp.task('lint', function () {
    return gulp.src(['**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('scss', function () {
    gulp.src(
            'src/scss/**/*.scss'
        ).pipe(scss(
            {'bundleExec': true}
        )).pipe(gulp.dest('src/css'));
});

gulp.task('default', ['lint', 'scss'], function() {});
