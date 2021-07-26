require('colors');

const mostrarMenu = () => {
    console.clear();
    console.log('======================='.blue);
    console.log(' Seleccione una opcion'.yellow);
    console.log('=======================\n'.blue);

    console.log(`${'?'.yellow} ¿Qué desea hacer?`.bold)
    console.log(`${'1.'.yellow} Crear tarea`);
    console.log(`${'2.'.yellow} Listar tareas`);
    console.log(`${'3.'.yellow} Listar tareas completadas`);
    console.log(`${'4.'.yellow} Listar tareas pendientes`);
    console.log(`${'5.'.yellow} Completar tarea(s)`);
    console.log(`${'6.'.yellow} Borrar tarea`);
    console.log(`${'0.'.yellow} Salir\n`);

    

}



module.exports = { mostrarMenu}