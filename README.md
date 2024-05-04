# Pasos para crear un proyecto desplegable con MONGO y NODE
## Paso 1: Instalar dependencias con npm
+ _**npm init -y**_
+ _**npm i express**_: esto ayuda a crear el servidor, es un Framework de servidor
+ _**npm i connect-flash**_: enviar mensajes entre las vistas
+ _**npm i bcryptjs**_: modulo de cifrado para claves espacialmente
+ _**npm i express-handlebars**_: ayuda a tener vistas
+ _**npm i express-session**_: guarda datos desde la memoria del servidor, por ejemplo que un usuario no se desloguee cada rato
+ _**npm i method-override**_: usar metodos put y delete desde formulario
+ _**npm i mongoose**_: ayuda a manejar la base de datos de mongoDb
+ _**npm i passport**_ y _**npm i passport-local**_: ayuda a autenticar el usuario
+ _**npm i dotenv**_: para usar variables de entorno
+ _**npm i nodemon**_: para que cuando hayan cambios se actualice automaticamente
+ _**npm i handlebars**_: para que cuando hayan cambios se actualice automaticamente
+ _**npm i npm-check-updates-**_: suoervisar si hay nuevos modulos o actualizaciones


## Paso 2: crear carpeta src 
+ Crear un archivo llamado index.js que sera el archivo principal por donde va a arrancar la aplicación
+ Crear un archivo llamado server.js que sera el codigo del servidor osea de express
+ Crear un archivo llamado database.js que sera el que conectara con la base de datos
+ Crear un carpeta config para configurar algunos modulos
+ Crear un carpeta controllers para almacenar las funciones cuando un usuario visite alguna de las rutas de nuestro servidor
+ Crear un carpeta helpers para almacenar las funciones adicionales
+ Crear un carpeta models para almacenar los modelos de datos
+ Crear un carpeta public para almacenar archivos estaticos
+ Crear un carpeta routes para almacenar las rutas del servidor
+ Crear un carpeta views para almacenar los html o otros

## Paso 3: usar el framework de express 
+ editar el archivo server.js para usar el framework de express
    - //Con esto creamos el servidor y lo guardamos en la variable app para luego exportarlo
    - const express = require('express');
    - const app  = express();
    - module.exports=app;

+ editar el archivo index.js para importa el framework de express creado en server.js

## Paso 4: configuracion de puertos, ruta principal y estaticos 
+ Editar el  package.json y colocar:
    - "start": "node src/index.js",
    - "dev": "nodemon src/index.js"

+ Editar server.js en Settings, en cada sección esta la descripcion para que funciona
    - app.set('port', process.env.PORT||4000)
    - app.set('views', path.join(__dirname,'views')) 

+ Editar server.js las Middlewares en cada sección esta la descripcion para que funciona
    - app.use(express.urlencoded({extended:false}));

+ crear la ruta principal 
    - app.get('/', (req, res)=>{res.send('Hola todos perros');})

+ crear la ruta de los archivos estaticos
    - app.use(express.static(path.join(__dirname,'public')))

## Paso 5: conectar bd y crear variables de entorno
+ Editamos el database.js para usar mongoose para usar mongo
+ Hacer que se requiera en index.js con require('dotenv').config()
    - Tenga en cuenta que el archivo .env nunca debe subirse al repositorio, porque para ello el servicio de hosting que usemos nos va a ayudar con eso

## Paso 6: Modelar los datos de la bd
+ Creamos el modelo para Notes.js en la carpeta models usando herramientas de mongoose como:
    - Schema: para definir un schema de mis datos
    - model: para crear una clase para tener metodos y propiedades que se pueden acceder desde codigo
+ Creamos el modelo para User.js de la misma manera