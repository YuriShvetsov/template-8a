const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

function sassCompile() {
    return gulp
        .src('./assets/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: [
                'last 2 version',
                'last 7 Chrome versions',
                'last 10 Opera versions',
                'last 7 Firefox versions'
            ],
            cascade: true
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./assets/css'));
}

gulp.task('watch', function() {
    watch('./assets/scss/**/*.scss', sassCompile);
});
