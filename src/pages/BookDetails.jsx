import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "react-rating-stars-component";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const BookDetails = () => {
    const {user} = useContext(AuthContext)
    const {id} = useParams();
    const navigate = useNavigate()
   const [book, setBook] = useState({});
   const [isModalOpen, setModalOpen] = useState(false);
   const [startDate, setStartDate] = useState(new Date());
   const [returnDate, setReturnDate] = useState(new Date())
   const {image,book_name,author_name,category,rating,description,quantity} = book || {};

   useEffect(()=>{
    fetchBookData()
   },[id])

   const fetchBookData = async () =>{
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/book/${id}`)
    setBook(data)
  }

// handle borrow form and send data to db
  const handleSubmit = async(e) =>{
    e.preventDefault();
    const userName = user?.displayName;
    const userEmail = user?.email;
    const borrowDate =  format(new Date(startDate), 'P');
    const dateOfReturn = format(new Date(returnDate), 'P');
    const category = e.target.category.value;
 
    const borrowData = {
        image,
        category,
        book_name,
        userName ,
        userEmail,
        borrowDate,
        dateOfReturn

    }
    try{
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/borrow-book/${id}`,borrowData)
        if(data.modifiedCount > 0){
            setBook(prev =>({
                ...prev,
                quantity:prev.quantity -1,
            }))
            setModalOpen(false);
            Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Book borrowed successfully!!",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          navigate('/borrowedBooks')
        }

    }catch(err){
        Swal.fire({
            icon: "error",
            title: "Failed!!",
            text:  err.message || "Something went wrong.",
          
          });
    }


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
               <Rating  value={rating} edit={false} size={24}></Rating>
                </div>
                {/* borrow btn */}
                <button
                onClick={() => setModalOpen(true)}
                disabled={quantity <= 0}

                 className={`${quantity <= 0 ? 'bg-gray-400' : 'bg-richGreen '}text-softWhite hover:bg-goldenYellow px-6 py-3 rounded-md font-semibold transition duration-300 w-full lg:w-auto font-roboto`}>
                    {quantity <= 0 ? 'Out of Stock' : 'Borrow Book'}
                    </button>
                </div>
            </div>
            {/* modal */}

            {
                isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-auto">
                        <div className="bg-softWhite p-6 rounded-md shadow-lg w-11/12 lg:w-1/2 max-h-[90vh] overflow-y-auto">
                            <h3 className="text-2xl text-richGreen font-lora font-bold mb-4">
                                Borrow book
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-4 font-roboto">
                                {/* img */}
                                <div>
                                    <label className="block text-charcoalGray font-semibold mb-2">Image:</label>
                                    <input
                                        type="text"
                                        name="image"
                                        defaultValue={image}
                                        readOnly
                                        className="w-full px-4 py-2 border rounded-md bg-gray-100"
                                    />
                                </div>
                                {/* book name */}
                                <div>
                                    <label className="block text-charcoalGray font-semibold mb-2">Book Name:</label>
                                    <input
                                        type="text"
                                        name="book_name"
                                        defaultValue={book_name}
                                        readOnly
                                        className="w-full px-4 py-2 border rounded-md bg-gray-100"
                                    />
                                </div>
                                {/* category */}
                                <div>
                                    <label className="block text-charcoalGray font-semibold mb-2">Category</label>
                                    <select name="category" id="category" className="mt-1 block w-full border border-slateGray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-richGreen">
                                        <option value="Novel" disabled>category</option>
                                        <option value="Thriller">Thriller</option>
                                        <option value="History">History</option>
                                        <option value="Novel">Novel</option>
                                        <option value="Sci-Fi">Sci-Fi</option>

                                    </select>
                                </div>
                                {/* user name */}
                                <div>
                                    <label className="block text-charcoalGray font-semibold mb-2">Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={user.displayName}
                                        readOnly
                                        className="w-full px-4 py-2 border rounded-md bg-gray-100"
                                    />
                                </div>
                                {/* email */}
                                <div>
                                    <label className="block text-charcoalGray font-semibold mb-2">Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={user.email}
                                        readOnly
                                        className="w-full px-4 py-2 border rounded-md bg-gray-100"
                                    />
                                </div>
                                {/* borrow date */}
                                <div>
                                    <label className="block text-charcoalGray font-semibold mb-2">Borrow Date:</label>
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} readOnly/>
                                </div>
                                {/* return date */}
                                <div>
                                    <label className="block text-charcoalGray font-semibold mb-2">Return Date:</label>
                                    <DatePicker selected={returnDate} onChange={(date) => setReturnDate(date)}/>
                                </div>
                                {/* two btn */}
                                <div className="flex justify-end gap-4">
                                    <button 
                                    type="button"
                                    onClick={() => setModalOpen(false)}
                                    className="px-4 py-2 bg-gray-400 text-softWhite rounded-md"
                                    >Cancel</button>

                                    <button 
                                    type="submit"
                                    className="px-4 py-2 bg-richGreen text-softWhite rounded-md hover:bg-goldenYellow">Borrow</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
            
        </div>
    );
};

export default BookDetails;