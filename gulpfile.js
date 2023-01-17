const gulp = require("gulp");
const gulp_prefix = require("gulp-autoprefixer");
const del = require("del");

const prefix = () => {
  return gulp
    .src("blocks-dev/**/*.css")
    .pipe(gulp_prefix())
    .pipe(gulp.dest("blocks"));
};

exports.prefix = prefix;

const clean = () => {
  return del("source");
};

exports.clean = clean;
