const express = require('express');
const router = express.Router();

const unidadController = require('../controllers/unidadController');

router.get('/', unidadController.todasLasUnidades);
router.get('/secreto', unidadController.secreto);
router.get('/nuevo', unidadController.nuevoBondi);
router.post('/nuevo', unidadController.agregarBondi);

module.exports = router;
