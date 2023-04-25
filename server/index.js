import dotenv from 'dotenv';
dotenv.config();
import connectToDatabase from './database.js';
import express from 'express';

// Our Routes
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

connectToDatabase();
const app = express();

app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

const port = process.env.PORT || 5000;
const db = process.env.URI;

app.listen(port, ()=> {
    console.log(`server runs on port ${port}.`);
});