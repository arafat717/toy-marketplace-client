

import Banner from "../Banner/Banner";
import ShopCatagory from "../Catagory/ShopCatagory";
import Gallary from "../Gallary/Gallary";
import AnotherSection from "../MoreSection/AnotherSection";
import MoreSection from "../MoreSection/MoreSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallary></Gallary>
            <MoreSection></MoreSection>
            <ShopCatagory></ShopCatagory>
            <AnotherSection></AnotherSection>
        </div>
    );
};

export default Home;