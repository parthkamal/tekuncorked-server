const express = require('express'); 
const mongoose = require('mongoose');
const createDbConnection = require('./db'); 

const app = express();
const dotenv = require('dotenv');

dotenv.config();


const PORT = process.env.PORT;


//db connection
createDbConnection();

app.get('/', (req, res) => {
	res.send('hello world')
}); 


app.listen(PORT, ()=> {
	console.log(`server is listening of port ${PORT}`); 
}); 


