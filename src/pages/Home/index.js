import Products from '../../components/Products';
import './style.css'
const Home = () => {
    return (
        <div className="home">
            <div className='banner-home'>
                <img src="https://file.hstatic.net/200000642007/file/mlb_1920x640_fe32c1742f8c416e9454a950210f885b.jpg" alt="banner"  className='banner'></img>
            </div>
            <Products />
        </div>
    );
}
export default Home;