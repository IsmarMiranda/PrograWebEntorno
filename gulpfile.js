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