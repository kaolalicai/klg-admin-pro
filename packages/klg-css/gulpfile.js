const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssmin = require('gulp-clean-css');

// compile component css
gulp.task('compile', () => {
  return gulp
    .src('./src/*.css')
    .pipe(postcss())
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'));
});

// copy lib files
gulp.task('lib', ['compile']);

gulp.task('build', ['lib']);
