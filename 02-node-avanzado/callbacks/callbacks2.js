const PersonajesDragonBall = ['Goku','Vegeta','Gohan','Trunks'];

function addPersonajes(personaje, callback){
    PersonajesDragonBall.push(personaje);
    callback()
};

function showPersonajes() {
    PersonajesDragonBall.forEach(personaje => console.log(personaje));
}
addPersonajes('Goten',showPersonajes);