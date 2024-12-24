
const Book = ({book}) => {
    const {image,book_name,quantity,author_name,category,rating,description} = book || {};

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
          <p className="text-sm text-slateGray">Rating : {rating}.</p>
          <div className="card-actions">
            <button className="bg-goldenYellow text-softWhite hover:bg-richGreen btn w-full">Update</button>
          </div>
        </div>
      </div>
    );
};

export default Book;