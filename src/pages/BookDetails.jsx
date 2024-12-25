import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "react-rating-stars-component";

const BookDetails = () => {
    const {id} = useParams();
   const [book, setBook] = useState({});
   const {image,book_name,author_name,category,rating,description,quantity} = book || {};

   useEffect(()=>{
    fetchBookData()
   },[id])

   const fetchBookData = async () =>{
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/book/${id}`)
    setBook(data)
  }
  
    return (
        <div className="container mx-auto p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 p-6 bg-bookBeige shadow-lg rounded-lg">
                {/* img */}
                <div className="w-full lg:w-1/3 flex justify-center">
                    <img src={image} alt={book_name} className="rounded-lg shadow-lg max-h-72" />
                </div>
                {/* book details */}
                <div className="w-full lg:w-2/3 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold font-lora text-charcoalGray">{book_name}</h2>
                <p className="text-lg text-slateGray font-roboto"><span className="font-semibold">Author:</span> {author_name}</p>
                <p className="text-lg text-dustyBlue font-roboto">
                    <span className="font-semibold">Category:</span> {category}
                </p>
                <p className="text-lg text-dustyBlue font-roboto">
                    <span className="font-semibold">Quantity Available:</span> {quantity}
                </p>
                <p className="text-lg text-charcoalGray font-roboto"><span className="font-semibold">Description:</span> {description}</p>
                {/* rating */}
                <div>
                <span className="text-lg font-semibold text-charcoalGray font-roboto">Rating:</span>
               <Rating value={rating} edit={false} size={24}></Rating>
                </div>
                {/* borrow btn */}
                <button className="bg-richGreen text-softWhite hover:bg-goldenYellow px-6 py-3 rounded-md text-lg font-semibold transition duration-300 w-full lg:w-auto font-roboto">Borrow Book</button>
                </div>

            </div>
            
        </div>
    );
};

export default BookDetails;