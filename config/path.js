const pathSrc = "./src";
const pathDest = "./public";

module.exports = {
    root: pathDest,
    html:{
        src:pathSrc +"/html/*.html",
        watch: pathSrc +"/html/**/*.html",
        dest:pathDest
    },
    html:{
        src:pathSrc +"/html/*.html",
        watch: pathSrc +"/html/**/*.html",
        dest:pathDest
    },

    pug:{
        src:pathSrc +"/pug/*.pug",
        watch: pathSrc +"/pug/**/*.pug",
        dest:pathDest
    },
    css:{
        src:pathSrc +"/css/*.css",
        watch: pathSrc +"/css/**/*.css",
        dest:pathDest + "/css"
    },
    scss:{
        src:pathSrc +"/sass/*.{scss,sass}",
        watch: pathSrc +"/sass/**/*.{scss,sass}",
        dest:pathDest + "/css"
    },
}