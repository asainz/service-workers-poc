var gulp = require("gulp");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var watch = require("gulp-watch");
var plumber = require('gulp-plumber');
var filter = require('gulp-filter');
var sourcemaps = require("gulp-sourcemaps");
var batch = require('gulp-batch');

gulp.task("transpile", function () {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    // .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});

gulp.task('work', function () {
    watch('src/**/*.js', batch(function (events, done) {
        gulp.start('transpile', done);
    }));
});
