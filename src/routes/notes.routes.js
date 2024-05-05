// quiero acceder el metodo de rutas de express
const { Router } = require('express')
const router = Router(); //con esto guardo el objeto Router en una variable llamada router

const {
    renderizarNoteForm,
    crearNuevaNota, 
    renderizarNotas, 
    renderizarEditForm,
    actualizarNota,
    eliminarNota
} = require('../controllers/notes.controller');

//nueva nota
router.get('/notes/add', renderizarNoteForm);
router.post('/notes/add', crearNuevaNota);

//obtener todas las notas
router.get('/notes', renderizarNotas);

//editar todas la nota
router.get('/notes/edit/:id', renderizarEditForm);

//actualizar las notas
router.put('/notes/edit/:id', actualizarNota);

//eliminar las notas
router.delete('/notes/delete/:id', eliminarNota);

module.exports=router //lo exportamos porque lo vamos a usar en el archivo del server