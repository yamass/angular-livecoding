var gulp = require('gulp');
var bower = require('gulp-bower');
var uglify = require('gulp-uglify');
var karma = require('karma').server;

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest('bower_components'));
});


gulp.task('js-minify', function () {
    return gulp.src(['js/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});

gulp.task('default', ['bower', 'js-minify', 'test']);



