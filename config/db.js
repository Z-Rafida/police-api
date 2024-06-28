import mongoose from "mongoose";
import 'dotenv/config'

const connectionString = process.env.mongo_url


export const dbConection =() =>{
    mongoose.connect(connectionString).then(() => {
        console.log('Database connected')
    });
};

