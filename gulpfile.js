const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
    //1. there is my scss file
    return gulp.src('./scss/**/*.scss')
    //2. pass that file into sass compiler
    .pipe(sass())
    //3. where do I save the compiled CSS.
    .pipe(gulp.dest('./css'))
    //4. stream changes to all browsers
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server:{
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./**/*.js').on('change', browserSync.reload);
}

exports.watch = watch;
exports.style = style;