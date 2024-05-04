// importamos el app del server para usarlo aqui
const app = require('./server');

app.listen(app.get('port'), ()=>{
    console.log('servidor escuchando en el puerto', app.get('port'))
})