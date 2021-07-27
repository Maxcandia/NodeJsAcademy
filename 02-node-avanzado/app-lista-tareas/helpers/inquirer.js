const inquirer = require('inquirer');
const { async } = require('rxjs');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
        { value: '1', name: `${'1.'.yellow} Crear tarea` },
        { value: '2', name: `${'2.'.yellow} Listar tarea` },
        { value: '3', name: `${'3.'.yellow} Listar tareas completadas` },
        { value: '4', name: `${'4.'.yellow} Listar tareas pendientes` },
        { value: '5', name: `${'5.'.yellow} Completar tarea(s)` },
        { value: '6', name: `${'6.'.yellow} Borrar tarea` },
        { value: '0', name: `${'0.'.red} ${"Salir".red}\n` },]

    }
];

const inquirerMenu = async() => {
    console.clear();
    console.log('======================='.blue);
    console.log(' Seleccione una opcion'.yellow);
    console.log('=======================\n'.blue);

   const{ opcion} = await inquirer.prompt(preguntas);

   return opcion;
}

const pausa = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'ENTER'.yellow} para continuar`
        }
    ]

    await inquirer.prompt(question);
}

module.exports = {
    inquirerMenu,
    pausa
}
