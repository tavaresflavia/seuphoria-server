import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRoutes from './src/routes/product';

dotenv.config();
const DATABASE_URI:string =process.env.DATABASE_URI || ""
const PORT = process.env.PORT || "8080"
const app = express();

mongoose.connect(DATABASE_URI, {retryWrites: true, w:'majority'})
.then(()=>{
    console.log('connected')
})
.catch((error:string) => {
    console.log(error)
})

app.use(cors());

app.use("/", (req,res)=>{

    res.status(200).json({message:"Hello"})
})

app.use('/products',productRoutes);

app.listen(PORT, ()=> {console.log(`...Listening to ${PORT}...`)})

