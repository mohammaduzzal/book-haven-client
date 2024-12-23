import { Link } from "react-router-dom";

const Slider = ({text,image}) => {
    return (
      <div
      className="w-full bg-center bg-cover h-[32rem] sm:h-[36rem] lg:h-[40rem]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gradient-to-r from-charcoalGray/80 via-charcoalGray/50 to-charcoalGray/80">
        <div className="text-center px-6">
          <h1 className="text-2xl font-bold font-lora text-softWhite drop-shadow-md sm:text-3xl md:text-4xl lg:text-5xl">
            {text}
          </h1>
          <br />
          <Link
            to="/addBook"
            className="inline-block px-5 py-3 mt-6 text-base font-medium text-softWhite bg-richGreen rounded-md hover:bg-goldenYellow sm:text-lg md:text-lg lg:text-xl transition duration-300 shadow-lg font-roboto"
          >
            Post Book & Borrow Book
          </Link>
        </div>
      </div>
    </div>
    );
};

export default Slider;