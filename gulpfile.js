/* ----------------------------------------------------
Author:     Elisabete Baker
Date:       June 2016
Project:    Compile FooBar scss to css
---------------------------------------------------- */
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('fooBarApp/scss/fooBarStyle.scss') // Get source file
    .pipe(sass()) // Sends file through plugin
    .pipe(gulp.dest('fooBarApp/css')) // Output file here
});