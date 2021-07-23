const PersonajesDragonBall = [];

function addPersonajes(personaje, callback){
    PersonajesDragonBall.push(personaje);
    callback()
}

function showPersonajes(){
    console.log(PersonajesDragonBall)
}

function iniciarCallback(){
        addPersonajes('Goku', showPersonajes)
        addPersonajes('Vegeta', showPersonajes)
        addPersonajes('Gohan', showPersonajes)
        addPersonajes('Piccoro', showPersonajes)
        addPersonajes('Trunks', showPersonajes)  
        addPersonajes('Goten', showPersonajes)             

}

iniciarCallback();