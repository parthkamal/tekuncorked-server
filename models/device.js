const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({ 
	name: { type: String , required: true }, 
	location: { type: String, required: true }, 
	temperature : { type: Number, required: true }
}); 

module.exports = mongoose.model('Device',deviceSchema);

