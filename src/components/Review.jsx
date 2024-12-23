

const Review = () => {
    const reviews = [
        {
            name: 'Jane Doe',
            image: 'https://i.ibb.co.com/LZZdZCW/user-2.png',
            date: '3 days ago',
            review: 'An inspiring and thought-provoking book!',
        },
        {
            name: 'John Smith',
            image: 'https://i.ibb.co.com/fHgnX52/user-1.png',
            date: '1 week ago',
            review: 'A must-read for anyone who enjoys deep storytelling.',
        },
        {

            name: "Emily Davis",
            feedback: "The books gave me peace of mind. Great service!",
            image: "https://i.ibb.co.com/L82t27P/user-3.png",
            date: '2 week ago',
            review: 'A must-read for anyone who want calm in  mind.'
        }
    ];
    return (

        <div className="py-10 bg-softWhite">
            <div className="container px-6 mx-auto">
                <h2 className="text-2xl font-lora font-bold text-charcoalGray sm:text-3xl">
                    Community Reviews
                </h2>
                <p className="mt-2 text-slateGray font-roboto">
                    See what others are saying about their favorite reads.
                </p>
                <div className="mt-6 space-y-4 font-roboto">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="p-4 bg-bookBeige rounded-lg shadow"
                        >
                            <div className="flex items-center">
                                <img
                                    src={review.image}
                                    alt={`${review.name}'s Avatar`}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div className="ml-4">
                                    <h3 className="text-sm font-semibold text-maroon">
                                        {review.name}
                                    </h3>
                                    <p className="text-xs text-dustyBlue">{review.date}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-charcoalGray">{review.review}</p>
                        </div>
                    ))}
                    <div className="text-center">
                        <button className="px-6 py-2 text-softWhite bg-richGreen rounded hover:bg-goldenYellow transition duration-300">
                            Add Your Review
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Review;