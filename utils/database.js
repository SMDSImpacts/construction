import mongoose from "mongoose";

let isConnected = false //track connection

export const connectToDB = async() => {
    mongoose.set('strictQuery', true)

    if(isConnected) {
        console.log('MongoDB is already connected');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "cityCenterHouses",
            
        })
        isConnected = true
        console.log('MongoDb is connected');
    } catch (error) {
       console.log(error); 
    }
}