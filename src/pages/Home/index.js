import './style.css'
import HomeSlider from "../../components/HomeSlider/Home-Slider";
import Newsletter from "../../components/Newsletter/Newsletter";
import CollectionOverview from "../../components/Collections/Collection-overview";
import ShopCarousel from "../../components/ShopCarousel/ShopCarousel";
import Promotion from "../../components/PromotionSlider/Promotion";
const Home = () => {
    return (
        <div className="home">
            <div>
                {/*<img src="https://file.hstatic.net/200000642007/file/mlb_1920x640_fe32c1742f8c416e9454a950210f885b.jpg" alt="banner"  className='banner'></img>*/}
                <HomeSlider/>
                <CollectionOverview/>
                <ShopCarousel/>
                <Promotion/>
                <Newsletter/>
            </div>
        </div>
    );
}
export default Home;