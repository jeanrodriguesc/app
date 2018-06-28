const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const htmlclean = require('gulp-htmlclean');
const rename = require("gulp-rename");

gulp.task('sass', function () {
  return gulp.src('./index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 100 versions']
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('htmlclean', function () {
  return gulp.src('./index.src.html')
    .pipe(htmlclean())
    .pipe(rename('index.html'))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function () {
  gulp.watch('./index.scss', ['sass']);
  gulp.watch('./index.src.html', ['htmlclean']);
});
