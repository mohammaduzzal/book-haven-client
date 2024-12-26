import { useEffect } from "react";
import { useState } from "react";
import Book from "../components/Book";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { axiosSecure } from "../hooks/useAxiosSecure";




const AllBooks = () => {
  
    const [books, setBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [viewMode, setViewMode] = useState("card");
    const [showAvailable, setShowAvailable] = useState(false);

    useEffect(()=>{
        const fetchAllBooks = async() =>{
            const {data} = await axiosSecure.get(`/books`)
            setBooks(data)
            setFilteredBooks(data);
        }
        fetchAllBooks();
    },[])

    // Toggle Show Available Books
  const handleShowAvailable = () => {
    if (showAvailable) {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(books.filter((book) => book.quantity > 0));
    }
    setShowAvailable(!showAvailable);
  };


     // Handle View Mode Change
  const handleViewChange = (e) => {
    setViewMode(e.target.value);
  };

    return (<>
         {/* helmet */}
    <Helmet>
    <title>All Books || Book Haven</title>
    </Helmet>

        <div className="container mx-auto p-4">
            <h2 className="text-4xl text-richGreen font-semibold font-lora mb-8 text-center">All Books</h2>
             {/* Filters and Toggles */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handleShowAvailable}
            className={`px-4 py-2 rounded ${
              showAvailable ? "bg-richGreen text-softWhite" : "bg-dustyBlue text-white"
            } transition`}
          >
            {showAvailable ? "Show All Books" : "Show Available Books"}
          </button>
          <select
            value={viewMode}
            onChange={handleViewChange}
            className="px-4 py-2 border rounded focus:outline-none"
          >
            <option value="card">Card View</option>
            <option value="table">Table View</option>
          </select>
        </div>


            {viewMode === "card" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {filteredBooks.map((book) => (
              <Book key={book._id} book={book}></Book>
            ))}
          </div>
        ) : (
            <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="font-lora font-bold">
                  <th>Book Name</th>
                  <th>Author</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Rating</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {filteredBooks.map((book) => (
                <tr key={book._id} className="font-roboto">
                  <td className="font-bold">{book.book_name}</td>
                  <td className="text-gray-500">{book.author_name}</td>
                  <td className={`
                   ${book.category === 'Novel' && 'text-richGreen'}
                    ${book.category === 'History' && 'text-goldenYellow'}
                    ${book.category === 'Sci-Fi' && 'text-blue-400'}
                    ${book.category === 'Thriller' && 'text-red-400'}
                    `}>{book.category}</td>
                  <td className="text-center">{book.quantity}</td>
                  <td className="text-center">{book.rating}</td>
                  <td>
                    <Link
                      to={`/update-book/${book._id}`}
                      className="bg-goldenYellow text-softWhite hover:bg-richGreen btn px-4 py-2 rounded"
                    >
                      Update
                    </Link>
                  </td>
                </tr>
              ))}
              
              </tbody>
            </table>
          </div>
        ) } 
        </div>
        </>);
};

export default AllBooks;