
const fs = require('fs')

const archivo = './database/data.json';
const guardarDB = ( data ) => {

    fs.writeFileSync( archivo, JSON.stringify(data));
}

const leerDB = () => {
    if (!fs.existsSync(archivo)) {
        return null;
    }


    const data = fs.readFileSync(archivo, { encoding: "utf-8"});
    const parsedData = JSON.parse(data);
    return parsedData;
}
module.exports = {
    guardarDB,
    leerDB
}