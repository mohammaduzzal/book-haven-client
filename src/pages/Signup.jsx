import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-softWhite">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold font-lora text-richGreen text-center mb-6">Create an account here</h2>
            <form className="space-y-4 font-roboto">
            {/* name */}
            <div>
                <label htmlFor="name" className="block text-sm text-charcoalGray">Name</label>
                <input 
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-richGreen"  required/>
            </div>
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
            {/* photo */}
            <div>
                <label htmlFor="photoURL" className="block text-sm text-charcoalGray">photoURL</label>
                <input 
                type="text"
                name="photo"
                id=""
                placeholder="photoURL"
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
                    Register
                </button>
            </div>
            </form>
            {/* google login */}
            <div className="mt-4 text-center">
                <button className="w-full flex justify-center items-center bg-red-500 hover:bg-red-400 text-white py-2 rounded transition">
                    <FcGoogle className="mr-2"></FcGoogle>
                    Continue with Google
                </button>
            </div>
            {/* login link */}
            <div className="mt-4 text-center">
                <p className="text-sm text-charcoalGray">
                Already have an account?{' '}
                <Link to='/auth/signin' className="text-richGreen hover:underline">Login</Link>
                </p>
            </div>

        </div>
        
    </div>
    );
};

export default Signup;