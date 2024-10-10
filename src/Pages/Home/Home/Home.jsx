import Banner from "../Banner/Banner";
import CategoryH from "../CategoryH/CategoryH";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import ContactH from "../ContactH/ContactH";
import Featured from "../Featured/Featured";
import IntroH from "../IntroH/IntroH";
import PopularMenu from "../PopularMenu.jsx/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div className="max-w-[1920px] mx-auto">
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <CategoryH />
            <IntroH />
            <PopularMenu />
            <ContactH />
            <ChefRecommend />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;
