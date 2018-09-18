var gulp                = require('gulp');
var cnf                 = require('../package.json').config;
var plumber             = require('gulp-plumber');
var notify              = require("gulp-notify");
var sourcemaps          = require('gulp-sourcemaps');
var buble               = require('gulp-buble');
var include            = require('gulp-include');
gulp.task('js', function () {
  return gulp.src(cnf.src.js)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(buble())
    .pipe(include({
        extensions: "js",
        hardFail: true,
        includePaths: [
          __dirname + "/bower_components",
          __dirname + "/src/js"
        ]
      }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cnf.dist.js));
});
 
gulp.task('js:watch', function () {
  gulp.watch('./src/js/**/*.*', ['js']);
});