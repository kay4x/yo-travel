const svgSprite = require("gulp-svg-sprite");
const del = require('del')
const rename = require("gulp-rename");
const gulp = require("gulp");



config = {
  mode: {
    css: {
      sprite: "sprite.svg",	
       render: {
         css: {
           template: "./gulp/templates/_sprite.css"
          }
       }
    }
  }
};


gulp.task("beginClean", () => {
   return del(["./app/temp/sprite", "./app/assets/images/sprites"]);
});

gulp.task("createSprite", ["beginClean"], () => {
  return gulp.src("./app/assets/images/icons/**/*.svg")
    .pipe(svgSprite(config))
    .pipe(gulp.dest("./app/temp/sprite/"));
});


gulp.task("copySpriteGraphic", ["createSprite"], () => {
  return gulp.src("./app/temp/sprite/css/**/*.svg")
  .pipe(gulp.dest("./app/assets/images/sprites"));
})


gulp.task("copySpriteCss", ["createSprite"], () => {
  return gulp.src("./app/temp/sprite/css/*.css")
    .pipe(rename("_sprite.css"))
    .pipe(gulp.dest("./app/assets/styles/modules"));
});

gulp.task("endClean", ["copySpriteGraphic", "copySpriteCss"], () => {
  return del("./app/temp/sprite")
});


gulp.task("generateIcons", ["beginClean", "createSprite", "copySpriteCss", "copySpriteGraphic", "endClean"])

