const express = require('express');
const router = express.Router();
const controller = require('../Controller/gastos.controller');

router.get('/gastos', controller.obtenerGastos);

module.exports = router;