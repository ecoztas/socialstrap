/**
 * Social media icons.
 *
 *
 *
 * @package     socialstrap
 * @author      ÖZTAŞ, Emre Can <me@emrecanoztas.com>
 * @copyright   2020
 * @license     MIT
 * @link        https://github.com/ecoztas/socialstrap
 * @since       v1.0
 */

// DEFINE: Package(s).
// =============================================================================
var gulp = require("gulp");
var sass = require("gulp-sass");
var cssmin = require("gulp-cssmin");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");

// TASK: Default
// =============================================================================
gulp.task("default", function () {
    console.log("Works fine!");
});

// TASK: SASS
// =============================================================================
gulp.task("sass", function () {
    return gulp
        .src("src/socialstrap.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest("dist/"))
        .pipe(cssmin())
        .pipe(
            rename({
                suffix: ".min",
            })
        )
        .pipe(gulp.dest("dist/"));
});
