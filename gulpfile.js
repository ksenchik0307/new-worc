import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import webpack from 'webpack-stream';
import sourcemaps from 'gulp-sourcemaps';
import imagemin from 'gulp-imagemin';
import htmlmin from 'gulp-htmlmin';
import newer from 'gulp-newer';
import browserSyncs from 'browser-sync';
import del from 'del';
import svgSprite from 'gulp-svg-sprite';
import cheerio from 'gulp-cheerio';
import replace from 'gulp-replace';
import fs from 'fs';
import fonter from "gulp-fonter";
import ttf2woff2 from 'gulp-ttf2woff2';

const browserSync = browserSyncs.create();

const styleFiles = ['src/css/main.scss']
const jsFile = ['src/js/main.js']

const paths = {
   html: {
      src: 'src/*.html',
      dest: 'dist'
   },
   styles: {
      src: 'src/css/**/*.scss',
      dest: 'dist/css/css/'
   },
   scripts: {      
      src: 'src/js/**/*.js',
      dest: 'dist/js/'      
   },
   img: {
      src: 'src/assets/**',
      dest: 'dist/assets'
   },
   svg: {      
      src: 'src/assets/svgSprite/**/*.svg',
      dest: 'dist/assets/svgSprite/'      
   },
}

function clean(){
   return del(['dist/*', '!dist/assets'])
}
function cleanSvg(){
   return del(['dist/assets/svgSprite/*', '!dist/assets/svgSprite/sprite.svg'])
}



function html(){
   return gulp.src(paths.html.src)
   .pipe(htmlmin({ collapseWhitespace: true }))
   .pipe(gulp.dest(paths.html.dest))
   .pipe(browserSync.stream())
}

const scss = gulpSass(dartSass);
function styles(){
   return gulp.src(styleFiles)
   .pipe(sourcemaps.init())
   .pipe(scss({outputStyle: 'compressed'}))
   .pipe(autoprefixer({
      cascade: false
   }))
   .pipe(concat('style.min.css'))
   .pipe(sourcemaps.write('.'))
   .pipe(gulp.dest(paths.styles.dest))
   .pipe(browserSync.stream())
}

function scripts(){
   return gulp.src(jsFile)
   .pipe(sourcemaps.init())
   .pipe(webpack({
      mode: 'development',
      output: {
         filename: 'main.min.js'
      }
   }))
   .pipe(babel({
      presets: ['@babel/env']
   }))
   .pipe(uglify())
   .pipe(sourcemaps.write('.'))
   .pipe(gulp.dest(paths.scripts.dest))
   .pipe(browserSync.stream())
}

function img(){
   return gulp.src(paths.img.src)
   .pipe(newer(paths.img.dest))
   .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
          plugins: [
              {removeViewBox: true},
              {cleanupIDs: false}
          ]
      })
   ]))
   .pipe(gulp.dest(paths.img.dest))   
}

function svg(){
   return gulp.src(paths.svg.src)
   .pipe(cheerio({
      run: function ($) {
         $('[fill]').removeAttr('fill');
         $('[fill-rule]').removeAttr('fill-rule');
         $('[stroke]').removeAttr('stroke');
         $('[style]').removeAttr('style');
      },
      parserOptions: {xmlMode: true}
   }))
   .pipe(replace('&gt;', '>'))
   .pipe(svgSprite({
      mode: {
         symbol: {
            sprite: "../sprite.svg",
         }
      }
   }))
   .pipe(gulp.dest(paths.svg.dest))
}

function watch(){
   browserSync.init({
      server: {
         baseDir: "./dist/"
      }
   })
   gulp.watch(paths.html.dest).on('change', browserSync.reload)
   gulp.watch(paths.html.src, html)
   gulp.watch(paths.styles.src, styles)
   gulp.watch(paths.scripts.src, scripts)
   gulp.watch(paths.img.src, img)
}

const build = gulp.series(clean, html, gulp.parallel(styles, scripts, img), cleanSvg, watch)

// exports.clean = clean
// exports.cleanSvg = cleanSvg
// exports.img = img
// exports.html = html
// exports.styles = styles
// exports.scripts = scripts
// exports.svg = svg
// exports.watch = watch
// exports.build = build
// exports.default = build

gulp.task('default', build);
export {build, svg}