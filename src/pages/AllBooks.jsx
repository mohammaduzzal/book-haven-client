import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Book from "../components/Book";

const AllBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        const fetchAllBooks = async() =>{
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/books`)
            setBooks(data)
        }
        fetchAllBooks();
    },[])

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl text-richGreen font-semibold font-lora mb-8 text-center">All Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {
                    books.map(book => <Book key={book._id} book={book}></Book>)
                }

            </div>
            
        </div>
    );
};

export default AllBooks;