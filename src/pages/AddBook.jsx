import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";


const AddBook = () => {
    const {user} = useContext(AuthContext)
    

    const handleSubmit = e =>{
        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const book_name = form.book_name.value;
        const quantity = parseFloat(form.quantity.value);
        const author_name = form.author_name.value;
        const category = form.category.value;
        const description = form.description.value;
        const rating = parseFloat(form.rating.value);
        const email = user?.email;
        
        // rating validation
        if(rating > 5){
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Offer rating (1 to 5)!",
               
              });
        }

     const bookData ={
        image,
        book_name,
        quantity,
        author_name,
        category,
        description,
        rating,
        email,
       

    };
    // post data
     axios.post(`${import.meta.env.VITE_API_URL}/add-book`, bookData)
    .then(data =>{
        if(data.data.insertedId){
            form.reset()
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Book Added Successfully!!",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
    }
    return (<>
    {/* helmet */}
    <Helmet>
    <title>Add Book || Book Haven</title>
    </Helmet>
        <div className="max-w-3xl mx-auto p-6 bg-softWhite shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4 text-richGreen font-lora">Add a Book</h2>
            <form onSubmit={handleSubmit} className="space-y-4 font-roboto">
                {/* image */}
                <div>
                    <label className="block text-charcoalGray">Book Cover</label>
                    <input 
                    type="text"
                     name="image"
                      id="image"
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
                      id="name"
                      className="mt-1 block w-full border border-slateGray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-richGreen"
                      placeholder="Enter Book Name"
                      required />
                </div>
                {/* quantity */}
                <div>
                    <label className="block text-charcoalGray">Book Quantity</label>
                    <input 
                    type="number"
                     name="quantity"
                      id="quantity"
                      className="mt-1 block w-full border border-slateGray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-richGreen"
                      placeholder="Enter Book Quantity"
                      required />
                </div>
                {/* author */}
                <div>
                    <label className="block text-charcoalGray">Author Name</label>
                    <input 
                    type="text"
                     name="author_name"
                      id="author_name"
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
                 {/* description */}
                 <div>
                    <label className="block text-charcoalGray">Short Description</label>
                    <input 
                    type="text"
                     name="description"
                      id="description"
                      className="mt-1 block w-full border border-slateGray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-richGreen"
                      placeholder="Enter short description"
                      required />
                </div>
                 {/* rating */}
                 <div>
                    <label className="block text-charcoalGray">Rating</label>
                    <input 
                    type="number"
                     name="rating"
                      id="rating"
                      step='any'
                      className="mt-1 block w-full border border-slateGray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-richGreen"
                      placeholder="Rating (1-5)"
                      required />
                </div>
                {/* btn */}
                <div>
                    <button type="submit" className="w-full bg-richGreen text-softWhite py-2 rounded-md hover:bg-dustyBlue transition">Add Book</button>
                </div>
            </form>
            {/* book static content  */}
            <div className="mt-6">
                <p className="text-slateGray font-roboto">
                A good book can change perspectives, inspire creativity, and provide a window into new worlds. Share the books that have inspired you!
                </p>
            </div>
        </div>
        </> );
};

export default AddBook;