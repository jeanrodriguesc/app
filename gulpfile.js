const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('./index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 100 versions']
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./index.scss', ['sass']);
});

