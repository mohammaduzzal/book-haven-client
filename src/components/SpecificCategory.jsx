import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "react-rating-stars-component";
import { AuthContext } from "../providers/AuthProvider";
import LoadingSpinner from "./LoadingSpinner";
import { Helmet } from "react-helmet-async";

const SpecificCategory = () => {
  const {loading} = useContext(AuthContext)
    const {category} = useParams();
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        const fetchAllBooks = async() =>{
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/books?category=${category}`)
           setBooks(data)
          
        }
        fetchAllBooks();
    },[category])

    if(loading) return <LoadingSpinner></LoadingSpinner>

    return (<>
     {/* helmet */}
     <Helmet>
    <title>{category} books || Book Haven</title>
    </Helmet>

        <div className="container mx-auto p-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-richGreen text-center mt-4 mb-8 font-lora">
                {category} Books
            </h2> 
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    books.map(book =>(
                        <div key={book._id} className="card card-compact bg-bookBeige shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105">
                        <figure>
                          <img
                            src={book.image}
                            alt={book.book_name}
                            className="h-40 mt-2" />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title text-xl font-roboto font-semibold text-charcoalGray">{book.book_name}</h2>
                          <p className="text-sm text-slateGray">By : {book.author_name}</p>
                          <p className="text-sm text-dustyBlue">Category : {book.category}</p>
                          <p className="text-sm text-dustyBlue">Quantity : {book.quantity}</p>
                          <Rating value={book.rating} edit={false} size={24}></Rating>
                          <div className="card-actions">
                            <Link to={`/details/${book._id}`} className="bg-goldenYellow text-softWhite hover:bg-richGreen btn w-full">Details</Link>
                          </div>
                        </div>
                      </div>
                    ))
                }

            </div>

        </div>
        </> );
};

export default SpecificCategory;