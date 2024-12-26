import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../hooks/useAxiosSecure";


const BorrowedBooks = () => {
  const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const email = user?.email;
    const [borrows, setBorrows] = useState([])

    useEffect(()=>{
        fetchBorrowedBooks()
    },[email])

    const fetchBorrowedBooks  = async() =>{
        const {data} = await axiosSecure.get(`/borrowed/${email}`)
        setBorrows(data)
    }
    // book return func
    const handleReturnBook = async (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Return it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              // Perform the DELETE request
              const { data } = await axiosSecure.delete(`/return-book/${id}`);
              
              if (data.deletedCount > 0) {
                // Update the state after successful deletion
                const remainingBooks = borrows.filter((borrow) => borrow._id !== id);
                setBorrows(remainingBooks);
      
                Swal.fire({
                  title: "Returned!",
                  text: "The book has been successfully returned.",
                  icon: "success",
                });
              }
            } catch (err) {
              Swal.fire({
                icon: "error",
                title: "Failed!",
                text: err.message || "Something went wrong.",
              });
              
            }
          }
        });
      };
      


    return ( <>
       {/* helmet */}
    <Helmet>
    <title>Borrowed Books || Book Haven</title>
    </Helmet>
        <div className="container mx-auto p-6">
          <h2 className="text-4xl text-richGreen font-semibold font-lora mb-8 text-center">Borrowed Book</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="font-lora font-black">
      <tr>
        <th>Book Name</th>
        <th>Category</th>
        <th>Borrowed Date</th>
        <th>Return Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            borrows.map(borrow =>(
                <tr key={borrow._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={borrow.image}
                          alt={borrow.book_name} />
                      </div>
                    </div>
                    <div>
                      <div className="md:font-bold font-lora text-charcoalGray">{borrow.book_name}</div>
                    </div>
                  </div>
                </td>
                <td className={
                    `font-roboto
                    ${borrow.category === 'Novel' && 'text-richGreen'}
                    ${borrow.category === 'History' && 'text-goldenYellow'}
                    ${borrow.category === 'Sci-Fi' && 'text-blue-400'}
                    ${borrow.category === 'Thriller' && 'text-red-400'}
                    `}>
                 {borrow.category}
                </td>
                <td className="font-roboto text-charcoalGray">{borrow.borrowDate}</td>
                <td className="font-roboto text-charcoalGray">{borrow.dateOfReturn}</td>
                <th>
                  <button 
                  onClick={() => handleReturnBook(borrow._id)}
                  className="btn btn-ghost btn-xs bg-richGreen hover:bg-goldenYellow text-white font-roboto">Return Book</button>
                </th>
              </tr>
            ))
        }    
    </tbody>
   
  </table>
</div>
        </div>
        </>);
};

export default BorrowedBooks;