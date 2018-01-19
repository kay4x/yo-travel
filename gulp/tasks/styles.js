const gulp = require('gulp'),
browserSync = require("browser-sync").create()
simpleVars = require("postcss-simple-vars")
postCss = require("gulp-postcss")
mixins = require("postcss-mixins")
hexRgba = require("postcss-hexrgba")
cssImport = require("postcss-import")
nestedCss = require("postcss-nested")
autoPrefixer = require("autoprefixer");

const plugins = [cssImport, mixins, simpleVars, nestedCss, autoPrefixer]


const handlePluginsError = function(errorInfo) {
   console.log(errorInfo.toString());
   this.emit("end")
}

gulp.task("styles", () => {
  return gulp.src("./app/assets/styles/main.css")
    .pipe(postCss(plugins))
    .on("error", handlePluginsError)
    .pipe(gulp.dest("./app/temp/styles"))
})

