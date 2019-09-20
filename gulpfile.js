const path = require('path');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const webpack = require('webpack');
const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const concat = require('gulp-concat');
const sequence = require('run-sequence');
const webpackConfig = require('./webpack.config.js');
const defaultTasks = [];

const ROOT_DIR = __dirname;
const DATA_DIR = path.join(ROOT_DIR, 'data');
const WRAPPER_DIR = path.join(ROOT_DIR, 'wrapper');
const BUILD_DIR = webpackConfig.output.path;
const JSON_FILES = [`${DATA_DIR}/**/*.json`];
const BUILD_DATA_FILES = [
    `${DATA_DIR}/**/*`,
    `!${DATA_DIR}/assets/img/final/**`
];

const BUILD_WRAPPER_FILES = [
    `${WRAPPER_DIR}/**/*`
];

const LIBRARY_FILES = [
    'lib/fpsmeter.js',
    'node_modules/gsap/src/uncompressed/plugins/BezierPlugin.js',
    'node_modules/gsap/src/uncompressed/easing/EasePack.js',
    'node_modules/gsap/src/uncompressed/TweenLite.js',
    'node_modules/gsap/src/uncompressed/TweenMax.js',
    'node_modules/pixi.js/dist/pixi.js',
    'node_modules/webgl-utils/index.js'
];

(require('gulp-total-task-time')).init();

defaultTasks.push('copy:data');
defaultTasks.push('copy:wrapper');
defaultTasks.push('copy:vendor');
defaultTasks.push('copy:lib');

gulp.task('copy:data', () => gulp.src(BUILD_DATA_FILES).pipe(gulp.dest(BUILD_DIR)));
gulp.task('copy:wrapper', () => gulp.src(BUILD_WRAPPER_FILES).pipe(gulp.dest(BUILD_DIR)));
gulp.task('copy:json', () => gulp.src(JSON_FILES).pipe((require('gulp-jsonmin'))()).pipe(gulp.dest(BUILD_DIR)));
gulp.task('build:clean', done => rimraf(BUILD_DIR, () => mkdirp(BUILD_DIR, done)));
gulp.task('copy:lib', ['copy:wrapper'], () => {
    return gulp.src(LIBRARY_FILES).pipe(concat('game.js')).pipe(gulp.dest(BUILD_DIR));
});
gulp.task('copy:vendor', () => {
    return gulp.src(LIBRARY_FILES).pipe(concat(`vendor.js`)).pipe(gulp.dest(BUILD_DIR));
});
gulp.task('build:webpack', defaultTasks, () => gulp.src('src/index.ts').pipe(webpackStream(webpackConfig, webpack)).on("error", () => {}).pipe(gulp.dest(BUILD_DIR)));

gulp.task("server", () => {
    const liteServer = require('lite-server');
    process.chdir(path.resolve(BUILD_DIR));
    liteServer.server();
});
gulp.task('default', () => sequence('build:webpack', ['copy:json']));
