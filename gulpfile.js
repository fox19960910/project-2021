const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const minify = require('gulp-minify');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer')
const minifyCSS = require('gulp-minify-css');
// const pug = require('gulp-pug');
/**
 * TOP FUNCTION 
 * 1, gulp.task : Dinh nghia task
 * 2, gulp.src: tro den thu muc can su dung
 * 3, gulp.dest: tro den thu muc output
 * 4, gulp.watch: theo doi thay doi.
 */
/**FIRST NPM : npm install --save-dev gulp */
// Pug
// gulp.task('views',function() {
//    return gulp.src('src/pug/*.pug')
//    .pipe(pug({
//       pretty: true
//    }))
//    .pipe(gulp.dest('src/html'))
// })
// Copy html 
gulp.task('copyHtml', function () {
   return gulp.src('src/html/*.html')
      .pipe(gulp.dest('dist/html'))
});

//  // Minimize Image ( npm install --save-dev gulp-imagemin)
gulp.task('imageMin', function () {
   return gulp.src('src/img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/img'))
})
// // Minimize CSS, JS (npm install --save-dev gulp-uglify)

// // minify JS
gulp.task('minifyJS', function () {
   return gulp.src('src/js/*.js')
      .pipe(minify())
      .pipe(gulp.dest('dist/js'))
})

//compile SASS to CSS (npm install --save-dev gulp-sass)
gulp.task('sass', function () {
   return gulp.src('src/sass/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('src/css'))
});
// prefix CSS (npm install --save-dev gulp-autoprefixer)
gulp.task('prefix', function () {
   return gulp.src('src/css/main.css')
      .pipe(prefix({
         browsers: ['last 2 versions'],
         cascade: false
      }))
      .pipe(gulp.dest('src/css'))
})

// //minify CSS (npm install gulp-clean-css --save-dev)
gulp.task('minifyCSS', function () {
   return gulp.src('src/css/*.css')
      .pipe(minifyCSS())
      .pipe(gulp.dest('dist/css'))
})
//new
// run all
gulp.task('run', gulp.series('copyHtml', 'minifyJS', 'imageMin', 'sass', 'minifyCSS'));
// gulp.task('run', gulp.series('sass'));
// watch

gulp.task('watch', function () {
   // gulp.watch('src/pug/*.pug', gulp.series('views'));
   // gulp.watch('src/html/*.html', gulp.series('copyHtml'));
   // gulp.watch('src/img/*', gulp.series('imageMin'));
   // gulp.watch('src/js/*.js', gulp.series('minifyJS'));
   gulp.watch('src/sass/main.scss', gulp.series('sass'));
   // gulp.watch('src/css/main.css', gulp.series('prefix'));
   // gulp.watch('src/css/*.css', gulp.series('minifyCSS'));
})

gulp.task('default', gulp.series('run', 'watch'))

