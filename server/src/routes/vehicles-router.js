var express = require('express');
var router = express.Router();
const Vehicles = require('../controllers/vehicle-ctrl');

/* GET users listing. */
router.get('/', Vehicles.fetchVehicles);

module.exports = router;
