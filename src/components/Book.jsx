import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {image,book_name,author_name,category,rating,_id} = book || {};

    return (
        <div className="card bg-softWhite  shadow-xl">
        <figure>
          <img
            src={image}
            alt={book_name}
            className="h-40" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-roboto font-semibold text-charcoalGray">{book_name}</h2>
          <p className="text-sm text-slateGray">By : {author_name}</p>
          <p className="text-sm text-dustyBlue">Category : {category}</p>
          <p className="text-sm text-slateGray">Rating : {rating}</p>
          <div className="card-actions">
            <Link to={`/update-book/${_id}`} className="bg-goldenYellow text-softWhite hover:bg-richGreen btn w-full">Update</Link>
          </div>
        </div>
      </div>
    );
};

export default Book;