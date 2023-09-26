import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopulareMenu from "../PopulareMenu/PopulareMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Category></Category>
         <PopulareMenu></PopulareMenu>
         <CallUs></CallUs>
         <Featured></Featured>
         <Testimonials></Testimonials>
        </div>
    );
};

export default Home;