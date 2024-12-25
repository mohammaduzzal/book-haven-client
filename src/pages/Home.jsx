import BookCategory from "../components/BookCategory";
import Carousel from "../components/Carousel";
import Review from "../components/Review";
import TopPick from "../components/TopPick";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <BookCategory></BookCategory>
            <TopPick></TopPick>
            <Review></Review>
            
        </div>
    );
};

export default Home;