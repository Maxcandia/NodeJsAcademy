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
    
    formatearTarea(tarea, i){
        const indice = `${i + 1}.`.yellow;
        const estado = tarea.completadoEn
                        ? 'Completada'.yellow 
                        : 'Pendiente'.red;
        return `${indice} ${tarea.desc} :: ${estado}`;
    }

    listadoCompleto(){
        this.listadoArr.forEach((tarea, i) => 
        console.log(this.formatearTarea(tarea,i)));
    }

    listarPendientesCompletas(completadas = true) {
        const list = this.listadoArr.filter((tarea) => 
            completadas ? tarea.completadoEn : !tarea.completadoEn);
        list.forEach((tarea,i) => console.log(this.formatearTarea(tarea,i)));
    }
   
  
}

module.exports = Tareas;