const express = require('express');
const router = express.Router();
const controller = require('../Controller/gastos.controller');
const control = require('../Controller/Categorias.controller');

router.get('/gastos', controller.obtenerGastos);
router.get('/categorias', control.obtenerCategorias);
module.exports = router;