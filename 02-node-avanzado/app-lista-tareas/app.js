const colors  = require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu,pausa,leerInput} = require('./helpers/inquirer');
//const { mostrarMenu, pausa } = require('./helpers/mensajes');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


console.clear();

const main = async() => {
    
    let opt = '';
    const tareas = new Tareas();
    const bdData = leerDB();
    console.log(bdData);
        await pausa();

    do {
        opt = await inquirerMenu();
        
        switch(opt){
            case '1':
                //crear opcion
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea(desc);
                break;

            case '2':
                console.log( tareas.listadoArr );
                break;
        }
       
        guardarDB( tareas.listadoArr );    


        await pausa();

    } while (opt !== '0');


};

main();