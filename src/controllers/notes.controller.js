const notesController = {};

notesController.renderizarNoteForm = (req, res)=>{
    res.render('notes/nuevaNota')};

notesController.crearNuevaNota = (req, res)=>{
    console.log(req.body) //aqui me doy cuenta que estoy recibiendo porque req es peticion 
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