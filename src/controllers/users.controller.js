const usersController = {};

const passport =require('passport');

const User =require('../models/User')
usersController.renderFormularioRegistro = (req, res)=>{
    res.render('users/signup')
}

usersController.formularioRegistro = async (req, res)=>{
    const errores=[];
    const {name, email, password, confirm_password}= req.body;

    if(password != confirm_password){
        errores.push({text:'Password no coincide'});
    }

    if(password.length < 4){
        errores.push({text:'Password debe tener al menos 4'});
    }

    if(errores.length > 0){
        res.render('users/signup',
        {errores, name, email});
    }else{
       const emailUser= await User.findOne({email:email});
       if(emailUser){
            req.flash('mensajes_errores','El correo ya esta en uso');
            res.redirect('/users/signup')
       }else{
        const nuevoUsuario=new User({ name, email, password });
        nuevoUsuario.password = await nuevoUsuario.encriptarpassword(password);
        await nuevoUsuario.save();
        req.flash('mensajes_exitos', 'Usuario creado con exito')
        res.redirect('/users/signin');
       }
    }

}

usersController.renderFormularioIngreso = (req, res)=>{
    res.render('users/signin')
}

usersController.formularioIngreso = passport.authenticate('local',{
    failureRedirect:'/users/signin',
    successRedirect:'/notes',
    failureFlash:true
});

usersController.salir = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err); // Llama a next(err) para manejar el error
        }
        req.flash('mensajes_exitos', 'Saliste');
        res.redirect('/users/signin');
    });
};


module.exports =usersController;