import React from 'react';
import {useState, useEffect} from 'react';
import BackButton from '../components/BackButton';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

export default function EditBook(){
    const [book, setBook] = useState({title: '', author: '', publishYear: '', price: ''});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/books/${id}`)
            .then((response) => {
                setBook(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    function saveChanges(){
        setLoading(true);
        axios
            .put(`http://localhost:5555/books/${id}`, book)
            .then((response) => {
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div style={{padding: '25px'}} className='flex flex-col space-y-5'>
            <BackButton />
            {loading ? (<Spinner />) : 
            (<div>
                <div className='space-y-12'>
                    <div className="border-b border-gray-900/10 pb-8">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Edit Book</h2> 
                        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Book Title</label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-lg">
                                        <input type="text" className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 truncate" placeholder={book.title} value={book.title} onChange={e => setBook({title: e.target.value, author: book.author, publishYear: book.publishYear, price: book.price})}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Author</label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-lg">
                                        <input type="text" className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 truncate" placeholder={book.author} value={book.author} onChange={e => setBook({title: book.title, author: e.target.value, publishYear: book.publishYear, price: book.price})}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Year of Publication</label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-lg">
                                        <input type="text" className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder={book.publishYear} value={book.publishYear} onChange={e => setBook({title: book.title, author: book.author, publishYear: e.target.value, price: book.price})}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-lg">
                                        <input type="text" className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder={book.price} value={book.price} onChange={e => setBook({title: book.title, author: book.author, publishYear: book.publishYear, price: e.target.value})}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-start gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => saveChanges()}>Save</button>
                </div>
            </div>)}
        </div>
    )
}