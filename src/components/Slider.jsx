import { Link } from "react-router-dom";

const Slider = ({text,image}) => {
    return (
        <div
        className="w-full bg-center bg-cover h-[32rem] sm:h-[36rem] lg:h-[40rem]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gradient-to-r from-black/70 via-black/50 to-black/70">
          <div className="text-center px-6">
            <h1 className="text-2xl font-bold text-white drop-shadow-md sm:text-3xl md:text-4xl lg:text-5xl">
              {text}
            </h1>
            <br />
            <Link
              to="/addBook"
              className="inline-block px-5 py-3 mt-6 text-base font-medium text-white bg-yellow-600 rounded-md hover:bg-yellow-500 sm:text-lg md:text-lg lg:text-xl transition duration-300 shadow-lg"
            >
              Post Book & Borrow Book
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Slider;