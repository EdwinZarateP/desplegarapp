// cargamos el metodo config de dotenv para leer lo que hay dentro del 
//archivo llamado .env para poder crear variables de entorno
require('dotenv').config();

// importamos el app del server para usarlo aqui
const app = require('./server');
// requerimos la base de datos
require('./database');

app.listen(app.get('port'), ()=>{
    console.log('servidor escuchando en el puerto', app.get('port'))
})