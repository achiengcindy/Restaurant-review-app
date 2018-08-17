const gulp = require('gulp'),
    imageResize = require('gulp-image-resize'),
    merge = require('gulp-merge-json'),
    rename = require("gulp-rename"),
    pathParse = require('path-parse');



gulp.task("default",() => {

    /* small images */
    gulp.src("./img/*.{jpg,png}")
        .pipe(imageResize({
            percentage: 50
        }))
        .pipe(rename((path) => {
            path.basename += "-small";
        }))
        .pipe(gulp.dest('./images'));

    /*      large pictures */
    gulp.src("./img/*.{jpg,png}")
        .pipe(imageResize({
            percentage: 90
        }))
        .pipe(rename((path) => {
            path.basename += "-large";
        }))
        .pipe(gulp.dest('./images'));
/* 
    original images */
    gulp.src("./img/*.{jpg,png}")
        .pipe(gulp.dest('./images'));


    /*   editing restrants pictures */
    gulp.src('./data/restaurants.json')
        .pipe(merge({
            fileName: 'restaurants-modified.json',
            edit: (parsedJson, file) => {
                parsedJson.restaurants.forEach(restaurant => {
                    var path = pathParse(restaurant.photograph);
                    restaurant.photograph_small = path.name + '-small' + path.ext;
                    restaurant.photograph_large = path.name + '-large' + path.ext;
                });
                return parsedJson;
            },
        }))
        .pipe(gulp.dest('./data'));
});

