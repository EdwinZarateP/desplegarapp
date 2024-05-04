const mongoose = require('mongoose')

const MONGODB_URI='mongodb://localhost/notes-app'

try {
    mongoose.connect(MONGODB_URI);
    console.log('Base de datos conectada');
} catch (error) {
    console.log(error);
}