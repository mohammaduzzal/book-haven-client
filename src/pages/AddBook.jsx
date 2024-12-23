
const AddBook = () => {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-softWhite shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4 text-richGreen font-lora">Add a Book</h2>
            <form className="space-y-4 font-roboto">
                {/* image */}
                <div>
                    <label className="block text-charcoalGray">Book Cover</label>
                    <input 
                    type="text"
                     name="image"
                      id="image"
                      className="mt-1 block w-full border border-slateGray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-richGreen"
                      placeholder="Enter Book Image Link"
                      required />
                </div>
                {/* name */}
                <div>
                    <label className="block text-charcoalGray">Book Name</label>
                    <input 
                    type="text"
                     name="book_name"
                      id="name"
                      className="mt-1 block w-full border border-slateGray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-richGreen"
                      placeholder="Enter Book Name"
                      required />
                </div>
                {/* quantity */}
                <div>
                    <label className="block text-charcoalGray">Book Quantity</label>
                    <input 
                    type="number"
                     name="quantity"
                      id="quantity"
                      className="mt-1 block w-full border border-slateGray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-richGreen"
                      placeholder="Enter Book Quantity"
                      required />
                </div>
                {/* author */}
                <div>
                    <label className="block text-charcoalGray">Author Name</label>
                    <input 
                    type="text"
                     name="author_name"
                      id="author_name"
                      className="mt-1 block w-full border border-slateGray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-richGreen"
                      placeholder="Enter Author Name"
                      required />
                </div>
                {/* category */}
                <div>
                <label className="block text-charcoalGray">Category</label>
                <select name="category" id="category" className="mt-1 block w-full border border-slateGray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-richGreen">
                        <option value="Novel">Novel</option>
                        <option value="Thriller">Thriller</option>
                        <option value="History">History</option>
                        <option value="Drama">Drama</option>
                        <option value="Sci-Fi">Sci-Fi</option>

                </select>
                </div>
                 {/* description */}
                 <div>
                    <label className="block text-charcoalGray">Short Description</label>
                    <input 
                    type="text"
                     name="description"
                      id="description"
                      className="mt-1 block w-full border border-slateGray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-richGreen"
                      placeholder="Enter short description"
                      required />
                </div>
                 {/* rating */}
                 <div>
                    <label className="block text-charcoalGray">Rating</label>
                    <input 
                    type="number"
                     name="rating"
                      id="rating"
                      className="mt-1 block w-full border border-slateGray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-richGreen"
                      placeholder="Rating"
                      required />
                </div>
                {/* btn */}
                <div>
                    <button type="submit" className="w-full bg-richGreen text-softWhite py-2 rounded-md hover:bg-dustyBlue transition">Add Book</button>
                </div>
            </form>
            {/* book static content  */}
            <div className="mt-6">
                <p className="text-slateGray font-roboto">
                A good book can change perspectives, inspire creativity, and provide a window into new worlds. Share the books that have inspired you!
                </p>
            </div>
        </div>
    );
};

export default AddBook;