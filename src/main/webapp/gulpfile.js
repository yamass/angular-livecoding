var gulp = require('gulp');
var bower = require('gulp-bower');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('bower', function () {
    return bower()
            .pipe(gulp.dest('bower_components'))
});

gulp.task('minify-js', ['bower'], function() {
    return gulp.src('js/*.js')
            .pipe(uglify())
            .pipe(rename(function (path) {
                path.basename += ".min";
            }))
            .pipe(gulp.dest('dist'));
});


gulp.task('default', ['bower', 'minify-js']);