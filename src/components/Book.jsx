import { Link } from "react-router-dom";
import Rating from "react-rating-stars-component";


const Book = ({book}) => {
    const {image,book_name,author_name,category,rating,_id} = book || {};


    return (
      <div className="card card-compact bg-bookBeige shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105 ">
      <figure>
        <img
          src={image}
          alt={book_name}
          className="h-40 mt-2" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-roboto font-semibold text-charcoalGray">{book_name}</h2>
        <p className="text-sm text-slateGray">By : {author_name}</p>
        <p className="text-sm text-dustyBlue">Category : {category}</p>
        <Rating value={rating} edit={false} size={24}></Rating>
        <div className="card-actions">
        <Link to={`/update-book/${_id}`} className="bg-goldenYellow text-softWhite hover:bg-richGreen btn w-full">Update</Link>
        </div>
      </div>
    </div>
    );
};

export default Book;