//para definir Schema con la ayuda de mongoose
const {Schema, model} = require('mongoose');


//1. Creamos el Schema
const UserSchema= new Schema({
    name:{ type:String, required:true },
    email:{ type:String, required:true },
    password:{ type:String, required:true }
},
{timestamps:true} //esta linea es para saber cuando se ha creado o actualizado el documento
)

//2. creamos el modelo y lo exportamos

module.exports = model('User', NoteSchema)
