import AboutUs from "./AboutUs";
import BannerSecttion from "./BannerSecttion";
import EndToEndService from "./EndToEndService";
import Gallery from "./Gallery";
import Interested from "./Interested";
import SupplyPost from "./SupplyPost";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
            <BannerSecttion></BannerSecttion>
            <SupplyPost></SupplyPost>
            <Testimonial></Testimonial>
            <Gallery></Gallery>
            <AboutUs></AboutUs>
            <EndToEndService></EndToEndService>
            <Interested></Interested>
        </div>
    );
};

export default Home;