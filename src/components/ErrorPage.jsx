import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-softWhite">
  <div className="text-center">
    <h1 className="text-9xl font-bold text-richGreen">404</h1>
    <h2 className="text-3xl font-bold text-charcoalGray mt-4">Page Not Found</h2>
    <p className="mt-2 text-lg text-dustyBlue">
      Sorry, the page you are looking for doesn’t exist or has been moved.
    </p>
    <div className="mt-6">
      <Link
        to="/"
        className="bg-richGreen text-softWhite px-6 py-3 rounded shadow hover:bg-dustyBlue"
      >
        Go Back Home
      </Link>
    </div>
  </div>
 
</div>

    );
};

export default ErrorPage;