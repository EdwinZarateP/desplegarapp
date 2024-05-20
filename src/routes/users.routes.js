// quiero acceder el metodo de rutas de express
const { Router } = require('express')
const router = Router(); //con esto guardo el objeto Router en una variable llamada router

//importamos las funciones
const {
    renderFormularioRegistro,
    formularioRegistro, 
    renderFormularioIngreso, 
    formularioIngreso,
    salir
} = require('../controllers/users.controller');

//Ingreso formulario de registro
router.get('/users/signup', renderFormularioRegistro);
//Ingreso 
router.post('/users/signup', formularioRegistro);

//Ingreso formulario de ingreso
router.get('/users/signin', renderFormularioIngreso);
//Ingreso 
router.post('/users/signin', formularioIngreso);

//Salir
router.get('/users/salir', salir);

module.exports=router; //lo exportamos porque lo vamos a usar en el archivo del server