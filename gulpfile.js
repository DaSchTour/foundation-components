var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('sass', function () {
    gulp.src('./scss/**/*.scss')
        .pipe($.sass().on('error', $.sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('sass:test', function () {
    gulp.src('./test/**/*.scss')
        .pipe($.sass().on('error', $.sass.logError))
        .pipe(gulp.dest('./test'));
});

gulp.task('sass:test:watch', function () {
    gulp.watch('./test/**/*.scss', ['sass:test']);
});