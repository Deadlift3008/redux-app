const gulp = require('gulp'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream');

gulp.task("styles",function(){
    return gulp.src("src/sass/main.sass")
        .pipe(sass())
        .pipe(gulp.dest("static/css"));

});

gulp.task("js",function(){
    return browserify('./src/index.js')
    .transform('babelify', {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('static/js'));
});




gulp.task("watch", function(){
    gulp.watch("sass/main.sass",['styles']);
    gulp.watch("js/*.js",['js']);
});

gulp.task("build",["styles","js"]);
