// importamos el app del server para usarlo aqui
const app = require('./server');

app.listen(3000, ()=>{
    console.log('servidor escuchando en el puerto 3000')
})