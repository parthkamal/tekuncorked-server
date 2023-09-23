const Device = require('../models/device');
const getDevices = require('./getDevice');

const io = global.io;


const handleGetDevices = async (request, response) => {
    try {
        const devices = await getDevices();
        console.log('handle get service run hui', {devices});
        response.status(200).json({ devices });
    } catch (error) {

        response.status(400).json({ error });
    }
}

const handleGetDevicesById = async (request, response) => {


    try {
        const { id } = request.params;
        const device = await Device.findById(id);

        response.status(200).json({ device });

    } catch (error) {

        response.status(400).json({ error });

    }

}


const handlePostDevice = async (request, response) => {

    try {

        const { name, location, temperature } = request.body;

        console.log(request.body);


        console.log({ name, location, temperature });
        const newDevice = new Device({ name, location, temperature });

        await newDevice.save();

        response.status(200).json({ message: "device added successfully" });
        const devices = await Device.find();
        io.emit('data-created', { devices });

    } catch (error) {

        console.log(error);
        response.status(400).json({ error });
    }

}

const handleUpdateDevice = async (request, response) => {

    try {

        const { id } = request.params;
        const updates = request.body;
        console.log(updates);
        await Device.findByIdAndUpdate(id, updates);
        response.status(200).json({ message: "updated successfully" }); 

        const devices = await getDevices();

        try {
            io.emit('data-updated', { devices });
            console.log('io.emit update wala run kar gyaa', {devices});
        }catch (error){
            console.log('io.emit update me error hai ', error);
        }
        

    } catch (error) {


        console.log(error);
        response.status(400).json({ error });
    }

}



module.exports = {
    getDevices,
    handleGetDevices,
    handleGetDevicesById,
    handlePostDevice, 
    handleUpdateDevice 
}
