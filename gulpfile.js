const gulp = require('gulp');
const less = require('gulp-less');
const through2 = require('through2');
const path = require('path');

// Gulp task to compile .less and output to same directory
gulp.task('less', function () {
  return gulp.src('**/*.less', { ignore: ['node_modules/**', 'dist/**'] }) // glob pattern
    .pipe(less())
    .pipe(through2.obj(function (file, _, cb) {
      const sourceDir = path.dirname(file.history[0]); // original .less path
      gulp.dest(sourceDir).write(file); // write compiled CSS to same dir
      cb();
    }));
});

// Optional: Watch for changes
gulp.task('watch', function () {
  gulp.watch('**/*.less', { ignoreInitial: false }, gulp.series('less'));
});

// Default task
gulp.task('default', gulp.series('less', 'watch'));
