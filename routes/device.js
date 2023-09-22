const express = require('express');
const Device = require('../models/device');
const router = express.Router();


router.get('/', async(request,response) => {

	try {
		const devices = await Device.find(); 

		console.log(devices); 
		response.status(200).json({devices});
	}catch(error){

		response.status(400).json({error});
	}

});


router.get('/:id', async(request,response) => {


	try {
		const {id } = request.params;
		const device = await Device.findById(id); 

		response.status(200).json({device});

	}catch(error){

		response.status(400).json({error});

	}

}); 

router.post('/', async(request,response) => {



	try {

		const { name, location, temperature } = request.body; 

		console.log(request.body);


		console.log({name, location, temperature });
		const newDevice = new Device({name, location, temperature}); 

		await newDevice.save(); 

		response.status(200).json( { message: "device added successfully"});

	}catch(error){

		console.log(error); 
		response.status(400).json({error});
	}

});


router.put('/:id', async(request, response) => {

	try {

		const {id} = request.params;

		const updates = request.body;

		console.log(updates);

		await Device.findByIdAndUpdate(id, updates); 

		response.status(200).json({message: "updated successfully"})

	}catch(error){


		console.log(error);
		response.status(400).json({error});
	}

}); 


module.exports = router; 
