const gulp = require("gulp");
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();




gulp.task("watch",  () => {
  browserSync.init({ server: { baseDir: './app' } });
  watch("./app/assets/styles/**/*.css", () => gulp.start("injectCss"));
  watch("./app/*.html").on("change", browserSync.reload);
 
})

gulp.task("injectCss", ["styles"], () => {
  return gulp.src("./app/temp/styles/main.css")
    .pipe(browserSync.stream());
})
