const mongoose = require('mongoose')

//Aqui importamos las variables de entorno que creamos en .envç
//estamos construyendo MONGODB_URI que es variable, porque puede mutar si el host cambia
const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE }=process.env;
const MONGODB_URI= `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

try {
    mongoose.connect(MONGODB_URI);
    console.log('Base de datos conectada');
} catch (error) {
    console.log(error);
}