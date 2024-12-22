
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const {user} = useAuth()
    
    return (
        <div className="navbar bg-softWhite shadow-sm container px-4 mx-auto">
        <div className="flex-1">
          <Link to="/" className="flex gap-2 items-center">
            <img className="w-auto h-7" src={logo} alt="Book Haven Logo" />
            <span className="font-bold text-richGreen">Book Haven</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="text-charcoalGray hover:text-richGreen">
                Home
              </Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link
                    to="/auth/signin"
                    className="text-charcoalGray hover:text-richGreen"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/auth/signup"
                    className="text-charcoalGray hover:text-richGreen"
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
      
          {user && (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div
                  title={user?.displayName}
                  className="w-10 rounded-full border-2 border-richGreen"
                >
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-bookBeige rounded-box w-52"
              >
                <li>
                  <Link
                    to="/allBooks"
                    className="justify-between text-charcoalGray hover:text-richGreen"
                  >
                    All Books
                  </Link>
                </li>
                <li>
                  <Link
                    to="/addBook"
                    className="text-charcoalGray hover:text-richGreen"
                  >
                    Add Book
                  </Link>
                </li>
                <li>
                  <Link
                    to="/borrowedBooks"
                    className="text-charcoalGray hover:text-richGreen"
                  >
                    Borrowed Books
                  </Link>
                </li>
                <li className="mt-2">
                  <button className="bg-dustyBlue text-softWhite px-4 py-2 rounded hover:bg-richGreen">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      
    
    );
};

export default Navbar;