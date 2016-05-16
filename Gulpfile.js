'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload'),
    lrhost = 'localhost',
    lrPort = 4040;


gulp.task('start', function () {
    nodemon({
        script: 'server/server.js'
    })
});

gulp.task('sass', function () {
    return gulp.src('./client/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./public/css'))
        .pipe(livereload({host: lrhost, port: lrPort}));
});

gulp.task('scripts', function () {
    gulp.src([
        './client/js/modernizer/html5shiv.js',
        './client/js/page-constructor.js',
        './client/js/table-constructor.js',
        './client/js/table-deltas-constructor.js',
        './client/js/app.js'])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/'))
        .pipe(livereload({host: lrhost, port: lrPort}));
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.run('sass');
    gulp.run('scripts');

    gulp.watch('client/sass/*.scss', function () {
        gulp.run('sass');
    });

    gulp.watch('client/js/**/*.js', function () {
        gulp.run(['scripts']);
    });
});

gulp.task('default', ['start', 'watch']);