const mongoose = require('mongoose');

const connection = async ()=> {
    try{
            //connecting to mongoDB
            await mongoose.connect(process.env.DB_URL);
            //showing message to the app server
            console.log(`Database is connected`);
    }
    catch(err){
        console.log(`Error in mongodb connection ${err}`)
    }
}

module.exports =  connection;