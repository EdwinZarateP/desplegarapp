// con esto creamos el servidor y lo guardamos en la variable app para luego exportarlo
const express = require('express');
const exphbs = require('express-handlebars'); //lo llame exphbs porque es un abreviado de express handlebars
const path = require('path');
const metodoOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport =require('passport');

//-------------------------------------------------------------------------------
// Inicializaciones
const app  = express();
require('./config/passport')

//-------------------------------------------------------------------------------
//Settings o configuraciones: son lo que quiero qe haga express basado en algunos modulo
app.set('port', process.env.PORT||4000)

//__dirname es el path del sistema que se concatena con el views en este caso
//el path lo debes importar y funciona para anteponer un slash de windows o linux antes del views
app.set('views', path.join(__dirname,'views')) 

//
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    LayoutsDir: path.join(app.get('views'), 'layouts'),
    PartialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'  
}));
app.set('view engine','.hbs')


//-------------------------------------------------------------------------------
//Middlewares: que son funciones que se van ejecutando a medida que llegan peticiones

//cada vez que lleguen datos de un formulario a traves de cualquier metodo vamos a tratar
//de convertir esos datos en un objeto json 
app.use(express.urlencoded({extended:false}));
app.use(metodoOverride('_method'));
app.use(session({
    secret:'secret',
    resave:true,
    saveUnitialized:true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//-------------------------------------------------------------------------------
//Global variables
app.use((req,res,next)=>{
    res.locals.mensajes_exitos = req.flash('mensajes_exitos');
    res.locals.mensajes_errores = req.flash('mensajes_errores');
    res.locals.error = req.flash('error');
    res.locals.user = req.user||null;
    next();
})


//-------------------------------------------------------------------------------
//Routes: que son las rutas

app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
app.use(require('./routes/users.routes'));


//-------------------------------------------------------------------------------
//static files o Archivos estaticos
app.use(express.static(path.join(__dirname,'public')))

module.exports=app;