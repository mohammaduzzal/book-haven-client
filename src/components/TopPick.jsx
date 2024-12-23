
const TopPick = () => {
    const books = [
        {
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
          image: 'https://i.ibb.co.com/VwzZ5tQ/The-Great-Gatsby-Hardcover-9781524879761-25185b73-7cc4-45d6-b8bb-adcb4bf6c1f7-3d056f2b8bc1289251ac0e.jpg',
          description: 'A classic novel of the Jazz Age, love, and the American Dream.',
        },
        {
          title: 'To Kill a Mockingbird',
          author: 'Harper Lee',
          image: 'https://i.ibb.co.com/vZ4T9kC/To-Kill-a-Mockingbird-1963-US-theatrical-poster.jpg',
          description: 'A profound story of racial injustice and moral growth.',
        },
        {
          title: '1984',
          author: 'George Orwell',
          image: 'https://i.ibb.co.com/CHYDsFr/3744438.jpg',
          description: 'A dystopian novel exploring surveillance and totalitarianism.',
        },
      ];
    
    return (
        <div className="bg-softWhite py-12 px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold font-lora text-charcoalGray text-center mb-8">
          Top Picks for You
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-richGreen"
            >
                <div className="relative w-full h-40">
                <img
                src={book.image}
                alt={book.title}
                className="h-full w-full object-contain"
              />

                </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold font-lora text-maroon mb-2">
                  {book.title}
                </h3>
                <p className="text-sm font-roboto text-slateGray mb-4">
                  by {book.author}
                </p>
                <p className="text-charcoalGray text-sm mb-6">{book.description}</p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default TopPick;