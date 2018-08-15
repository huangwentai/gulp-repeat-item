var gulp = require('gulp');
gulpRepeatItem = require('../index');

gulp.task('default', function () {
  return gulp.src('./*.html')
    .pipe(gulpRepeatItem())
    .pipe(gulp.dest('./build/'));
});
