var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var rename = require('gulp-rename');
connect = require('gulp-connect');

gulp.task('server', ['clone'], function() {
 connect.server({
   root: './web/',
   port:'4000',
   livereload: true
 });
});

gulp.task('default',['server'], function () {
 gulp.watch(['./src/**'], ['sreload']);
});


gulp.task('sreload',['clone'],function(){
return  gulp.src('./web/**')
   .pipe(connect.reload());
})

var dest = './cordova/www';


gulp.task('scripts', function () {
 var bundler = browserify('./src/app/app.js').transform(babelify)

 return bundler.bundle()
  .on('error', function (err) {
          console.log(err.toString());
          this.emit("end");
      })
   .pipe(source('app.js'))
   .pipe(buffer())
   .pipe(rename('app.min.js'))
   //.pipe(uglify())
   .pipe(gulp.dest(dest+'/js'))
})

gulp.task('markup',['css'], function(){
  return gulp.src('./src/www/index.html')
     .pipe(gulp.dest(dest));


});

gulp.task('clone',['markup'],function(){
  return gulp.src([dest+'/**'])
      .pipe(gulp.dest('./web'));
})



gulp.task('imagesandfonts', ['js'], function () {
 gulp.src('./src/fonts/**')
    .pipe(gulp.dest(dest+'/fonts'));
 return gulp.src('./src/images/**')
    .pipe(gulp.dest(dest+'/images'));
});

gulp.task('js',['scripts'], function(){
 return gulp.src('./src/js/*.js')
     .pipe(gulp.dest(dest+'/js'));
});

gulp.task('css',['imagesandfonts'], function(){
 return gulp.src('./src/css/*.css')
     .pipe(cleanCSS({debug: true}, function(details) {
             console.log(details.name + ': ' + details.stats.originalSize);
             console.log(details.name + ': ' + details.stats.minifiedSize);
         }))
     .pipe(concat('app.min.css'))
     .pipe(gulp.dest(dest+'/css'));
});
