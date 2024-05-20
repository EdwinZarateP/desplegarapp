const passport =require('passport');
const User = require('../models/User');
const localStrategy = require('passport-local').Strategy;

passport.use(new localStrategy({
    usernameField:'email',
    passwordField:'password'
},async(email, password, done)=>{
    //confirmar si existe correo
    const usuario = await User.findOne({email})
    if(!usuario){
        return done(null, false, {message:'El usuario no existe'})
    }else{
        const comparacion = await usuario.compararpassword(password)
        if (comparacion){
            return done(null, usuario)
        }else{
            return done(null, false, {message:'Clave incorrecta'})
        }
    }
}));

passport.serializeUser((usuario, done)=>{
    done(null, usuario.id)
});

passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });