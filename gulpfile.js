const gulp = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const webpack = require('gulp-webpack');
const minify = require('gulp-minify');

const tsconfig = require('./tsconfig.json');
const webpackConfig = require('./webpack.config.js');

gulp.task('clean', () => {
  return gulp.src('./dist', { allowEmpty: true })
    .pipe(clean());
});

gulp.task('ts', () => {
  return gulp.src('./src/*.ts')
    .pipe(ts(tsconfig.compilerOptions))
    .pipe(gulp.dest('./dist/js'));
});

// Creates js bundle from several js files
gulp.task('build', () => {
  return webpack(webpackConfig)
    .pipe(rename('rndmjs.js'))
    .pipe(minify())
    .pipe(gulp.dest('./dist'))
});

gulp.task('default', gulp.series(
  'clean',
  'ts',
  'build',
  cb => cb()
));
