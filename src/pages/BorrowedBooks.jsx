import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

const BorrowedBooks = () => {
    const {user} = useContext(AuthContext)
    const email = user?.email;
    const [borrows, setBorrows] = useState([])

    useEffect(()=>{
        fetchBorrowedBooks()
    },[email])

    const fetchBorrowedBooks  = async() =>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/borrowed/${email}`)
        setBorrows(data)
    }
    console.log(borrows);

    return (
        <div className="container mx-auto p-6">
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
                  <button className="btn btn-ghost btn-xs bg-richGreen hover:bg-goldenYellow text-white font-roboto">Return</button>
                </th>
              </tr>
            ))
        }    
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default BorrowedBooks;