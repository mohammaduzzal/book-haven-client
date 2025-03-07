import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Signin = () => {
   const { signInUser, setUser,  signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate();
    const location =useLocation()
    const from = location?.state?.from?.pathname || "/";

    // Google Signin
  const handleGoogleSignIn = async() =>{
         try {
             await signInWithGoogle()
       
             Swal.fire({
                 position: "center",
                 icon: "success",
                 title: "Signin  successful!",
                 showConfirmButton: false,
                 timer: 1500
               });
             navigate(from, {replace:true})
           } catch (err) {
             Swal.fire({
                 icon: "error",
                 title: "Signin failed!",
                 text:  err.message || "Something went wrong.",
               
               });
           }
       
     }
   // Email Password Signin
  const handleLogIn = async(e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
   try{
    await signInUser(email,password)
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Signin  successful!",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from, {replace: true})

   }catch(err){
    Swal.fire({
        icon: "error",
        title: "Signin failed!",
        text:  err.message || "Something went wrong.",
      
      });
   }

  }
    return ( <>
     {/* helmet */}
     <Helmet>
    <title>Signin || Book Haven</title>
    </Helmet>

        <div className="flex justify-center items-center min-h-screen bg-softWhite">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-bold font-lora text-richGreen text-center mb-6">Login</h2>
                <form onSubmit={handleLogIn} className="space-y-4 font-roboto">
                {/* email */}
                <div>
                    <label htmlFor="email" className="block text-sm text-charcoalGray">Email Address</label>
                    <input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-richGreen"  required/>
                </div>
                {/* password */}
                <div>
                    <label htmlFor="password" className="block text-sm text-charcoalGray">Password</label>
                    <input 
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-richGreen"  required/>
                </div>
                {/* login btn */}
                <div>
                    <button type="submit" className="w-full bg-richGreen text-white py-2 rounded hover:bg-dustyBlue transition">
                        Login
                    </button>
                </div>
                </form>
                {/* google login */}
                <div className="mt-4 text-center">
                    <button onClick={handleGoogleSignIn} className="w-full flex justify-center items-center bg-red-500 hover:bg-red-400 text-white py-2 rounded transition">
                        <FcGoogle className="mr-2"></FcGoogle>
                        Continue with Google
                    </button>
                </div>
                {/* register link */}
                <div className="mt-4 text-center">
                    <p className="text-sm text-charcoalGray">
                    Don't have an account?{' '}
                    <Link to='/auth/signup' className="text-richGreen hover:underline">Register</Link>
                    </p>
                </div>

            </div>
            
        </div>
        </>);
};

export default Signin;