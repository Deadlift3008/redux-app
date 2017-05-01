var gulp = require('gulp'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    browserify = require('gulp-browserify');

gulp.task("styles",function(){
    return gulp.src("src/sass/main.sass")
        .pipe(sass())
        .pipe(gulp.dest("static/css"));

});

gulp.task("js",function(){
    return gulp.src("src/**/*.js")
        .pipe(babel({
            presets: ["es2015","react"]
        }))
        .pipe(gulp.dest("static/js"));
});




gulp.task("watch", function(){
    gulp.watch("sass/main.sass",['styles']);
    gulp.watch("js/*.js",['js']);
});

gulp.task("build",["styles","js"]);
