<<<<<<< HEAD
//importar funciones específicas  de la API de gulp
const { src, dest, series, parallel, watch } = require('gulp');

//importar paquetes
const gulp = require("gulp");
const sass = require('gulp-sass');
const { reload } = require('browser-sync');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minifycss = require('gulp-minify-css');

//Constante de trabajo
const files = {
    scssPath: 'src/scss//*.scss',
    htmlPath: 'dist//.html',
    cssPath: 'dist/**/.css',
    jsPath: 'src//*.js'
}


//Compilar los archivos de sass en estios en cascada para el navegador (CSS)


function scssTask(d) {
    return src(files.scssPath)
        .pipe(sass())
        .pipe(dest('dist/css'))
}

// * Observar cambios en los archivos de sass para compilar automáticamente

function watchTask() {
    watch(
        [files.scssPath, files.htmlPath],
        series(scssTask, reloadTask)
    )
}


// * Sirve archivos automáticamente en navegador
function serveTask(d) {
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });
    d();
}

//
// * Actualización de cambios en tiempo real en el navegador
// */
function reloadTask(d) {
    browserSync.reload();
    d();
}

//
 //* Minificación de archivos CSS
// */
function minifycssTask(d) {
    return src(files.cssPath)
        .pipe(concat('app.css'))
        .pipe(minifycss())
        .pipe(dest('build/cssminify/'))
}

/**
 * Minificación de archivos js
 */
function minifyjsTask(d) {
    return src(files.jsPath)
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(dest('build/jsminify/'))
}

exports.default = series(scssTask, minifycssTask, minifyjsTask, serveTask, watchTask);
=======
// Importar las funciones especificas de la API de gulp que vamos a utilizar
const{src,dest, series, parallel, watch} = require('gulp');

// Importar los paquetes con los que vamos a trabajar
const saas = require('gulp-sass');
const browserSync = require('browser-sync').create();

const files = {
    scssPath: 'src/scss/**/*.scss',
    htmlPath: 'dist/**/*.html'
}

function helloWorldTask(done){
    console.log("Hello world! ");
    done();
}

//primeras tareas que utiliza las funcionalidades de gulp
    //constantes de trabajo (directorios archivo, tipos arc para no rescribir)
    

 /**
  * 
  *compilar los archivos de sass en estilos en cascada para el navegador (css)
  */   
function scssTask(){
    return src(files.scssPath)
    .pipe(saas())
    .pipe(dest('dist/css'));
}


/**
 * Observar cambios en los archivos de sass para compilarlos automaticamente
 */
function watchTask() {
    watch(
        [files.scssPath, files.htmlPath],
        series(scssTask,reloadTask)
    )
}

function serveTastk(d){
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });
    d();
}

function reloadTask(d){
    browserSync.reload();
    d();
}
//exportamos la tarea 
//si es publica

    exports.default = series(scssTask,serveTastk,watchTask);
>>>>>>> 019cb70cac6ef8cef0140aa665519de588a66db6
