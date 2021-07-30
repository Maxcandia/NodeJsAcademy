const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        });
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    crearTarea( desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
    cargarTareasFromArray(tareas = []){
        tareas.forEach((tarea) => {
            this._listado[tarea.id] = tarea;
        });
    } 
    
    listadoCompleto(){
        this.listadoArr.forEach((tarea, i) => {
            const estado = tarea.completadoEn ? "Completada".yellow : "Pendiente".red;
            const numero = i + 1;
            console.log(`${numero} ${tarea.desc} :: ${estado}`);
        });
    }
    
}

module.exports = Tareas;