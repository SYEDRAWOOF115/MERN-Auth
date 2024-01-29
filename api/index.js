import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
dotenv.config();
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('connected to mongoDB');
})
.catch((error)=>{
    console.log(error);
})
const app = express();
app.listen(3000,()=>{
    console.log('server is listening at port 3000!');
});

app.use('/api/user',userRoutes);

