const notesController = {};
const Notes = require('../models/Notes');
const modeloNotas = require('../models/Notes')

notesController.renderizarNoteForm = (req, res)=>{
    res.render('notes/nuevaNota')};

notesController.crearNuevaNota = async (req, res)=>{
    const { titulo, descripcion } =req.body;
    const nuevaNota = new modeloNotas({title:titulo, description:descripcion});
    nuevaNota.usuario=req.user.id;
    await nuevaNota.save();
    req.flash('mensajes_exitos','nota agregada');
    res.redirect('/notes')};

notesController.renderizarNotas = async (req, res)=>{
    const notas = await Notes.find({usuario:req.user.id })
    if (notas.usuario != req.user.id){
        req.flash('mensajes_errores', 'no autorizado')
        return res.redirect('/notes');
    }
    res.render('notes/todas-notas', {notas})};

notesController.renderizarEditForm = async (req, res)=>{
    const nota = await Notes.findById(req.params.id);
    res.render('notes/edit-note', { nota })};

    
notesController.actualizarNota = async (req, res)=>{
    const { title, description  } = req.body;
    await Notes.findByIdAndUpdate(req.params.id,{ title, description })
    req.flash('mensajes_exitos','nota actualizada');
    res.redirect('/notes')};
    
notesController.eliminarNota = async (req, res)=>{
    await Notes.findByIdAndDelete(req.params.id);
    req.flash('mensajes_exitos','nota eliminada');
    res.redirect('/notes')
}

module.exports =notesController;