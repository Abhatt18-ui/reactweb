import dotenv from 'dotenv';
import connectToDatabase from './database.js';
import express from 'express';

// Our Routes
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/UserRoutes.js';

dotenv.config();
connectToDatabase();
const app = express();


app.use(express.json());

const port = process.env.PORT || 5000;
const db = process.env.URI;

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.listen(port, ()=> {
    console.log(`server runs on port ${port}.`);
});