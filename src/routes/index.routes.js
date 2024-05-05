// quiero acceder el metodo de rutas de express
const { Router } = require('express')
const router = Router(); //con esto guardo el objeto Router en una variable llamada router

const { renderizarIndex, renderizarAbout } = require('../controllers/index.controller');

router.get('/', renderizarIndex);

router.get('/about', renderizarAbout);


module.exports=router; //lo exportamos porque lo vamos a usar en el archivo del server