var gulp = require('gulp'),
	uglify = require('gulp-uglify');

// Scripts task
// Uglifies
gulp.task('scripts',function(){
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('minjs'));
});

// Styles task
// Uglifies
gulp.task('styles',function(){
	console.log('runs styles');
});

// Watch task
// Watches JS
gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts']);
});

gulp.task('default', ['scripts','styles','watch']);