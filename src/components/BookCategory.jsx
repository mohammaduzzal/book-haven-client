import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import LoadingSpinner from "./LoadingSpinner";


const BookCategory = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        const fetchAllBooks = async() =>{
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/categories`)
           setCategories(data)
           
        }
        fetchAllBooks();

    },[])
   
    return (
        <div className="container mx-auto p-8 font-lora">
            <h2 className="text-3xl  lg:text-4xl font-bold  text-charcoalGray text-center mt-4 mb-8">
                Book Category
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
                {
                    categories.map(category => (
                        <div key={category} className="card bg-bookBeige shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105">
                            <Link to={`/category/${category}`}>
                        <div className="card-body">
                            <h2 className="card-title text-charcoalGray justify-center ">{category}</h2>
                        </div>
                        </Link>
                    </div>
                    ))
                }
            </div>   
        </div>
    );
};

export default BookCategory;