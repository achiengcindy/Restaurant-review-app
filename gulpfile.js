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
   
/**
 * medium images .
 */   
    gulp.src("./img/*.{jpg,png}")
    .pipe(imageResize({
        percentage: 50
    }))
    .pipe(rename((path) => {
        path.basename += "-medium";
    }))
    .pipe(gulp.dest('./images'));

    /*      large pictures */
    gulp.src("./img/*.{jpg,png}")
        .pipe(imageResize({
            percentage: 60
        }))
        .pipe(rename((path) => {
            path.basename += "-large";
        }))
        .pipe(gulp.dest('./images'));
/* 
    extra large images */
    gulp.src("./img/*.{jpg,png}")
    .pipe(imageResize({
        percentage: 90
    }))
    .pipe(rename((path) => {
        path.basename += "-extralarge";
    }))
    .pipe(gulp.dest('./images'));


    /*   editing restrants pictures */
    gulp.src('./data/restaurants.json')
        .pipe(merge({
            fileName: 'restaurants-modified.json',
            edit: (parsedJson, file) => {
                parsedJson.restaurants.forEach(restaurant => {
                    const path = pathParse(restaurant.photograph);
                    restaurant.photograph_small = path.name + '-small' + path.ext;
                    restaurant.photograph_medium = path.name + '-medium' + path.ext;
                    restaurant.photograph_large = path.name + '-large' + path.ext;
                    restaurant.photograph_extralarge = path.name + '-extralarge' + path.ext;

                });
                return parsedJson;
            },
        }))
        .pipe(gulp.dest('./data'));
});