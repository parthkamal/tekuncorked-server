const express = require('express'); 
const createDbConnection = require('./db'); 

const app = express();
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))


//routes
const deviceRoute = require('./routes/device');
app.use('/device', deviceRoute);





//db connection
createDbConnection();

app.get('/', (req, res) => {
	res.send('hello madarchode')
}); 


app.listen(PORT, ()=> {
	console.log(`server is listening of port ${PORT}`); 
}); 


