const contratarJugador = new Promise( (resolve, reject) => {
    
    const contratado = true;

    if(contratado) {
        resolve('El jugador se incorpora al equipo')
    } else {
        reject('El jugador y el equipo no llegaron a un acuerdo')
    }
    
})

contratarJugador
       .then( mensaje => console.log(mensaje))
       .catch( error => console.log(error))

 
//console.log(contratarJugador)
