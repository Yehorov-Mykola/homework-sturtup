let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));

gulp.task('scss', function(){
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('app/css'))
});

gulp.task( 
    'serve', 
    gulp.series('scss', function () { 
         gulp.watch("./scss/**/*.scss", gulp.parallel("scss")); 
    }) 
);

gulp.task('default', gulp.series('serve'));

