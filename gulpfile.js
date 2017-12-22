const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const gulpsync = require('gulp-sync')(gulp);
const clean = require('gulp-clean');
const typescript = require('gulp-typescript');
const tsconfig = require('./tsconfig.json');
const rename = require('gulp-rename');
const webpack = require('gulp-webpack');
const minify = require('gulp-minify');

gulp.task('default', gulpsync.sync([ 'compile', 'dist' ]));


const tsPath = path.join( process.cwd(), 'src' );
const jsPath = path.join( process.cwd(), 'js' );
gulp.task('compile', gulpsync.sync([ 'remove-js-foler', 'ts' ]));
gulp.task('remove-js-foler', () => {
  return gulp.src( './js' )
    .pipe(clean())
  ;
});
gulp.task('ts', () => {
  return gulp.src(path.join( tsPath, '*.ts' ))
    .pipe(typescript(tsconfig.compilerOptions))
    .pipe(gulp.dest( file => {
      return path.join(
        tsPath,
        path.relative( tsPath, jsPath ),
        path.relative( tsPath, file.base )
      );
    }))
  ;
});

gulp.task('dist', gulpsync.sync([ 'remove-dist', 'webpack' ]));
gulp.task('remove-dist', () => {
  return gulp.src( './dist' )
    .pipe(clean())
  ;
});
gulp.task('webpack', () => {
  return webpack(require( './webpack.config.js' ))
    .pipe(rename('rndmjs.js'))
    .pipe(minify())
    .pipe(gulp.dest('./dist'))
  ;
});
