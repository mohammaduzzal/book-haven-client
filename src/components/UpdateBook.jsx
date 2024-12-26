import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBook = () => {
    const {id} = useParams()
    const [book, setBook] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        bookData()
    },[id])


// fetching single book data by id
    const bookData = async() =>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/book/${id}`)
        setBook(data)
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const book_name = form.book_name.value;
        const author_name = form.author_name.value;
        const category = form.category.value;
        const rating = parseFloat(form.rating.value);
        const bookDetails = {
            image,
            book_name,
            author_name,
            category,
            rating,
        }
        // update book data with the help of axios and put method
        try{
            await axios.put(`${import.meta.env.VITE_API_URL}/update-book/${id}`, bookDetails)
             Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Book Updated Successfully!!",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          navigate('/allBooks')

        }catch(err){
             Swal.fire({
                    icon: "error",
                    title: "Failed!!",
                    text:  err.message || "Something went wrong.",
                  
                  });

        }

    }
    
    return (<>
         {/* helmet */}
    <Helmet>
    <title>Update Book || Book Haven</title>
    </Helmet>
        <div className="max-w-2xl mx-auto p-6 bg-softWhite shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-richGreen font-lora">Update a Book</h2>
        <form onSubmit={handleSubmit} className="space-y-4 font-roboto">
            {/* image */}
            <div>
                <label className="block text-charcoalGray">Book Cover</label>
                <input 
                type="text"
                 name="image"
                  id="image"
                  defaultValue={book.image}
                  className="mt-1 block w-full border border-slateGray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-richGreen"
                  placeholder="Enter Book Image Link"
                  required />
            </div>
            {/* name */}
            <div>
                <label className="block text-charcoalGray">Book Name</label>
                <input 
                type="text"
                 name="book_name"
                  id="book_name"
                  defaultValue={book.book_name}
                  className="mt-1 block w-full border border-slateGray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-richGreen"
                  placeholder="Enter Book Name"
                  required />
            </div>
            {/* author */}
            <div>
                <label className="block text-charcoalGray">Author Name</label>
                <input 
                type="text"
                 name="author_name"
                  id="author_name"
                  defaultValue={book.author_name}
                  className="mt-1 block w-full border border-slateGray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-richGreen"
                  placeholder="Enter Author Name"
                  required />
            </div>
            {/* category */}
            <div>
            <label className="block text-charcoalGray">Category</label>
            <select name="category" id="category" className="mt-1 block w-full border border-slateGray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-richGreen">
                    <option value="category" disabled>category</option>
                    <option value="Thriller">Thriller</option>
                    <option value="History">History</option>
                    <option value="Novel">Novel</option>
                    <option value="Sci-Fi">Sci-Fi</option>

            </select>
            </div>
             {/* rating */}
             <div>
                <label className="block text-charcoalGray">Rating</label>
                <input 
                type="number"
                 name="rating"
                  id="rating"
                  step='any'
                  defaultValue={book.rating}
                  className="mt-1 block w-full border border-slateGray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-richGreen"
                  placeholder="Rating"
                  required />
            </div>
            {/* btn */}
            <div>
                <button type="submit" className="w-full bg-richGreen text-softWhite py-2 rounded-md hover:bg-dustyBlue transition">Save</button>
            </div>
        </form>
       
    </div>
    </>);
};

export default UpdateBook;