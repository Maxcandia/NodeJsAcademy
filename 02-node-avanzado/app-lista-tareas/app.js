const colors  = require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu,pausa,leerInput} = require('./helpers/inquirer');
//const { mostrarMenu, pausa } = require('./helpers/mensajes');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');




const main = async() => {
    
    let opt = '';
    const tareas = new Tareas();


    const bdData = leerDB();
    if(bdData) {
        tareas.cargarTareasFromArray(bdData);
    }


    do {
        opt = await inquirerMenu();
        
        switch(opt){
            case '1':
                //crear opcion
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea(desc);
                break;

            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPendientesCompletas(true);
                break;
            case '4':
                tareas.listarPendientesCompletas(false);    
        }
       
        guardarDB( tareas.listadoArr );    


        await pausa();

    } while (opt !== '0');


};

main();