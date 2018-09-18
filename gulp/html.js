var gulp                = require('gulp');
var cnf                 = require('../package.json').config;
var plumber             = require('gulp-plumber');
var notify              = require("gulp-notify");



gulp.task('html', function () {
  return gulp.src(cnf.src.html + '/*.html')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    
    .pipe(gulp.dest(cnf.dist.html));
});
 
gulp.task('html:watch', function () {
  gulp.watch('./src/sass/**/*.*', ['html']);
});