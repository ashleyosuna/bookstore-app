import express from 'express';
import {Book} from '../models/bookModel.js';
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear || !req.body.price){
            return res.status(400).send({message: 'missing required fields'});
        }
        const newBook = {title: req.body.title, author: req.body.author, publishYear: req.body.publishYear, price: req.body.price};
        const book = await Book.create(newBook);
        return res.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

// get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        res.status(500).send({message: error.message});
    }
})

// get a book by ID
router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
})

// updating a book
router.put('/:id', async (req, res) => {
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear || !req.body.price){
            return res.status(400).send({message: 'missing required fields'});
        }

        const {id} = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(400).send({message: 'missing required fields'});
        }
        return res.status(200).send({message: 'update successful'});
    } catch (error) {
        res.status(500).send({message: error.message});
    }
})

// deleting a book
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id);

        if (!result){
            return res.status(404).send({message: 'book not found'});
        }
        return res.status(200).send({message: 'book deleted successfully'});
    } catch (error) {
        res.status(500).send({message: error.message});
    }
})

export default router;