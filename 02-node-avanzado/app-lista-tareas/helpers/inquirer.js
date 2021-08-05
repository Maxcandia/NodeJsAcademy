const inquirer = require('inquirer');
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

const leerInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if (value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const listadoTareasBorrar = async( tareas = {} ) => {
    const choices = tareas.map((tarea, i) => {
      const index = `${i + 1}.`.yellow;

      return {
        value: tarea.id,
        name: `${index} ${ tarea.desc }`
      }
    })

    choices.unshift({
      value: '0',
      name: '0.'.yellow + ' Cancelar'
    })

    const preguntas = [
      {
        type: 'list',
        name: 'id',
        message: 'Borrar',
        choices
      }
    ]

    const { id } = await inquirer.prompt(preguntas);
    return id;
}

const mostrarListadoChecklist = async( tareas = {} ) => {
  const choices = tareas.map((tarea, i) => {
    const index = `${i + 1}.`.yellow;

    return {
      value: tarea.id,
      name: `${index} ${ tarea.desc }`,
      checked: (tarea.completadoEn ) ? true : false
    }
  })

  const preguntas = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Selecciones',
      choices
    }
  ]

  const { ids } = await inquirer.prompt(preguntas);
  return ids;
}
const confirmar = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message
    }
  ]

  const { ok } = await inquirer.prompt(question);
  return ok;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
}
