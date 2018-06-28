const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const htmlclean = require('gulp-htmlclean');
const imagemin = require('gulp-imagemin');

const final = './final';

gulp.task('sass', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 100 versions']
    }))
    .pipe(gulp.dest(final));
});

gulp.task('html', function () {
  return gulp.src('./src/*.html')
    .pipe(htmlclean())
    .pipe(gulp.dest(final));
});

gulp.task('js', function () {
  return gulp.src('./src/*.js')
    .pipe(gulp.dest(final));
});

gulp.task('images', function () {
  return gulp.src('./src/*.png')
    .pipe(imagemin())
    .pipe(gulp.dest(final));
});

gulp.task('compile', ['sass', 'html', 'js', 'images']);

gulp.task('watch', ['compile'], function () {
  gulp.watch('./src/*.scss', ['sass']);
  gulp.watch('./src/*.html', ['html']);
  gulp.watch('./src/*.js', ['js']);
});
