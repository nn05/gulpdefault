var gulp                = require('gulp');
var cnf                 = require('../package.json').config;
var plumber             = require('gulp-plumber');
var notify              = require("gulp-notify");
var rename              = require('gulp-rename');
var cssnano             = require('gulp-cssnano');
var importCss           = require('gulp-import-css');
var buble               = require('gulp-buble');
var include             = require('gulp-include');
var uglify              = require('gulp-uglify');

gulp.task('libs', function () {
    gulp.src(cnf.libs.css)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(importCss())
        .pipe(cssnano())
        .pipe(rename({
            dirname: "",
            basename: "libs",
            prefix: "",
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(gulp.dest(cnf.dist.css));
    gulp.src(cnf.libs.js)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(buble())
        .pipe(include({
            extensions: "js",
            hardFail: true
        }))
        .pipe(uglify())
        .pipe(gulp.dest(cnf.dist.js));
  });
   
  gulp.task('libs:watch', function () {
    gulp.watch(cnf.libs.css, ['libs']);
    gulp.watch(cnf.libs.js, ['libs']);
  });