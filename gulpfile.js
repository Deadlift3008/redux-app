var gulp = require('gulp'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

gulp.task("styles",function(){
    return gulp.src("src/sass/main.sass")
        .pipe(sass())
        .pipe(gulp.dest("static/css"));

});

gulp.task("js",function(){
    return browserify({
        entries: './src/index.js',
        debug: true
    })
    .transform('babelify', {
        presets: ['es2015', 'react']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('static/js'));
});




gulp.task("watch", function(){
    gulp.watch("sass/main.sass",['styles']);
    gulp.watch("js/*.js",['js']);
});

gulp.task("build",["styles","js"]);
