const notesController = {};

notesController.renderizarNoteForm = (req, res)=>{
    res.send('notes add')};

notesController.crearNuevaNota = (req, res)=>{
    res.send('nueva nota')};

notesController.renderizarNotas = (req, res)=>{
    res.send('renderizado de notas')};

notesController.renderizarEditForm = (req, res)=>{
    res.send('nota editada')};

    
notesController.actualizarNota = (req, res)=>{
    res.send('nota actualizada')};
    
notesController.eliminarNota = (req, res)=>{
    res.send('nota eliminada')};
    
module.exports =notesController;