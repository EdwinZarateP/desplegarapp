// quiero acceder el metodo de rutas de express
const { Router } = require('express')
const router = Router(); //con esto guardo el objeto Router en una variable llamada router

//importamos las funciones
const {
    renderizarNoteForm,
    crearNuevaNota, 
    renderizarNotas, 
    renderizarEditForm,
    actualizarNota,
    eliminarNota
} = require('../controllers/notes.controller');

const {isAuthenticated} =require('../helpers/auth')

//nueva nota
router.get('/notes/add',isAuthenticated, renderizarNoteForm);
router.post('/notes/new-note',isAuthenticated, crearNuevaNota);

//obtener todas las notas
router.get('/notes', isAuthenticated,renderizarNotas);

//editar todas la nota
router.get('/notes/edit/:id',isAuthenticated, renderizarEditForm);

//actualizar las notas
router.put('/notes/edit/:id', isAuthenticated, actualizarNota);

//eliminar las notas
router.delete('/notes/delete/:id',isAuthenticated, eliminarNota);

module.exports=router //lo exportamos porque lo vamos a usar en el archivo del server