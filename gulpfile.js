// Include gulp
var gulp = require('gulp');

// Include Our Plugins
//var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');

// Lint Task
/*gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});*/

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Compress images
gulp.task('images', function() {
    return gulp.src('views/images/**/*')
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('views/dist/assets/img'))
        .pipe(notify({ message: 'Images task complete' }));
});

// Default Task
gulp.task('default', ['sass', 'scripts', 'watch', 'images']);