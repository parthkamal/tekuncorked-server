const express = require('express');
const router = express.Router();

const { handleGetDevices,
	handleGetDevicesById,
	handlePostDevice, 
	handleUpdateDevice
} = require('../controllers/device');

router.get('/', handleGetDevices);
router.get('/:id', handleGetDevicesById);
router.post('/', handlePostDevice);
router.put('/:id', handleUpdateDevice);


module.exports = router; 
