const notesController = {};
const Notes = require('../models/Notes');
const modeloNotas = require('../models/Notes')

notesController.renderizarNoteForm = (req, res)=>{
    res.render('notes/nuevaNota')};

notesController.crearNuevaNota = async (req, res)=>{
    const { titulo, descripcion } =req.body;
    const nuevaNota = new modeloNotas({title:titulo, description:descripcion});
    await nuevaNota.save();
    res.send('nueva nota')};

notesController.renderizarNotas = async (req, res)=>{
    const notas = await Notes.find()
    res.render('notes/todas-notas', {notas})};

notesController.renderizarEditForm = (req, res)=>{
    res.send('nota editada')};

    
notesController.actualizarNota = (req, res)=>{
    res.send('nota actualizada')};
    
notesController.eliminarNota = (req, res)=>{
    res.send('nota eliminada')};
    
module.exports =notesController;