var gulp                = require('gulp');
var runSequence         = require('run-sequence');

gulp.task('watch', function() {
    runSequence(
        'build',
        [
            'sass:watch',
            'libs:watch',
            'js:watch',
            'html:watch',
            'fonts:watch',
            'img:watch'
        ],
        'server'
    );
  });