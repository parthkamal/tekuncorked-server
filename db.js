const mongoose = require('mongoose');


const createDbConnection= async()=> {
	try{
		const DB_USERNAME  = process.env.DB_USERNAME; 
		const DB_PASSWORD  = process.env.DB_PASSWORD;
		const mongoURI =  `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.9cvzjsf.mongodb.net/?retryWrites=true&w=majority`;

		const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };
		await mongoose.connect(mongoURI , connectionOptions); 

		console.log('database connected');
	}catch (error){
		console.log('database me erroe aagya',error);
	}
}



module.exports = createDbConnection;
