const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function styleComp() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(gulp.dest('./build/styles/'));
}

function jsComp() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts/'));
}

function imgComp() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images/'));
}

exports.default = function () {
        gulp.watch('./source/styles/*.scss', {ignoreInitial:false}, gulp.series(styleComp));
        gulp.watch('./source/scripts/*.js', {ignoreInitial:false}, gulp.series(jsComp));
        gulp.watch('./source/images/*', {ignoreInitial:false}, gulp.series(imgComp));
}