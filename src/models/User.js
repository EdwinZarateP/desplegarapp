//para definir Schema con la ayuda de mongoose
const {Schema, model} = require('mongoose');
const encriptador = require('bcryptjs');

//1. Creamos el Schema
const UserSchema= new Schema({
    name:{ type:String, required:true },
    email:{ type:String, required:true },
    password:{ type:String, required:true }
},
{timestamps:true} //esta linea es para saber cuando se ha creado o actualizado el documento
);

//2. Metodo para encriptar la password con methods que viene de mongoose
UserSchema.methods.encriptarpassword = async password =>{
    //creamos esta variable salt que la usaremos como parametro del encriptador.hash
    //el numero 10 es variable, si quiere un numero mayor es mas seguro pero consume mas recurso
    const salt = await encriptador.genSalt(10) 
    return await encriptador.hash(password, salt); //esto me devuelve el password cifrado
}

//3. Metodo para comparar la password encriptada con la que el usuario este digitando

UserSchema.methods.compararpassword = async function(password){
    return await encriptador.compare(password, this.password);
}


//4. creamos el modelo y lo exportamos
module.exports = model('User', NoteSchema)
