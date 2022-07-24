const {src, dest, watch, series, parallel } = require("gulp");
const path = require("./config/path.js");

//Плагины 
const browserSync = require("browser-sync").create();


const clear = require("./task/clear.js");
const pug = require("./task/pug.js");
const scss = require("./task/scss.js");

//Наблюдатель
const watcher = ()=>{
    watch(path.pug.watch,pug).on("all", browserSync.reload);
    watch(path.scss.watch,scss).on("all", browserSync.reload);
}
//Удаление директории

//Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
}

exports.pug = pug;
exports.scss = scss;


exports.dev = series(
    clear,
    parallel(pug,scss),
    parallel(watcher,server)
);