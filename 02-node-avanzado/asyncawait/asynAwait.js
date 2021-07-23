function descargarClientes() {
      
    return new Promise((resolve, reject) => {
        const error = false;
       
        setTimeout(() => {
            if(!error) {
                resolve('Listado de clientes descargado correctamente')
            } else {
                reject('Error en la conexión')
            }
        }, 3000);
    })
}

async function ejecutar() {
    try {
        console.log('me ejecuto al instante')

        const respuesta = await descargarClientes();
        console.log(respuesta)

        console.log('tengo que esperar a que termine lo que tiene el await')
    } catch (error) {
        console.log(error)
    }
}
ejecutar();