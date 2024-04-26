import express from "express";
import {PORT, mongoDBURL} from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('here');
})

app.use('/books', booksRoute);

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('connected to database');
        app.listen(PORT, () => {
            console.log(`app is listeting to port: ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })