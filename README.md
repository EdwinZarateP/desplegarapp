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


## Paso 2: crear carpeta src y el index.js
Adentro vamos a crear un archivo llamado index.js que sera el archivo principal por donde va a arrancar la aplicación
