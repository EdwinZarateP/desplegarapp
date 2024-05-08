const notesController = {};
const Notes = require('../models/Notes');
const modeloNotas = require('../models/Notes')

notesController.renderizarNoteForm = (req, res)=>{
    res.render('notes/nuevaNota')};

notesController.crearNuevaNota = async (req, res)=>{
    const { titulo, descripcion } =req.body;
    const nuevaNota = new modeloNotas({title:titulo, description:descripcion});
    await nuevaNota.save();
    req.flash('mensaje exitosos','nota agregada');
    res.redirect('/notes')};

notesController.renderizarNotas = async (req, res)=>{
    const notas = await Notes.find()
    res.render('notes/todas-notas', {notas})};

notesController.renderizarEditForm = async (req, res)=>{
    const nota = await Notes.findById(req.params.id);
    res.render('notes/edit-note', { nota })};

    
notesController.actualizarNota = async (req, res)=>{
    const { title, description  } = req.body;
    await Notes.findByIdAndUpdate(req.params.id,{ title, description })
    req.flash('mensaje exitosos','nota actualizada');
    res.redirect('/notes')};
    
notesController.eliminarNota = async (req, res)=>{
    await Notes.findByIdAndDelete(req.params.id);
    req.flash('mensaje exitosos','nota eliminada');
    res.redirect('/notes')
}

module.exports =notesController;