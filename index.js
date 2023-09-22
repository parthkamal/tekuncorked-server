const express = require('express'); 

const app = express();
const PORT = 3000; 

app.get('/', (req, res) => {
	res.send('hello world')
}); 


// mongodb+srv://parthkamal:<password>@cluster0.9cvzjsf.mongodb.net/?retryWrites=true&w=majority
app.listen(PORT, ()=> {
	console.log(`server is listening of port ${PORT}`); 
}); 


