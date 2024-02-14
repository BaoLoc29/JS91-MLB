import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import './style.css';
const Header = ({ onSearch }) => {
    const [searchField, setSearchField] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchField(value);
        onSearch(value);
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            navigate('/search'); 
            setSearchField('');
        }
    };
    return (
        <div className='header'>
            <div className='header-left'>
                <div className="header-logo">
                    <Link to="/" aria-label="Home">
                        <svg xmlns="http://www.w3.org/2000/svg" width="84" height="24" viewBox="0 0 84 24" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M27.6027 0L17.7745 10.585L14.1671 0H6.94734V0.005L5.41862 0L6.33686 2.365L1.14528 19.9L0 24H7.24501L10.6203 12.505L13.1177 18.435H17.8199L23.8036 12.505L20.4283 24H27.7742L34.8224 0H27.6027ZM75.8708 7.25C75.5933 8.195 74.67 9.205 72.6519 9.205H68.0758L69.2261 5.295H73.8022C75.8153 5.295 76.1483 6.305 75.8708 7.25ZM73.5499 16.585C73.2573 17.595 72.2583 18.71 70.2402 18.71H65.2908L66.5269 14.495H71.4814C73.4944 14.495 73.8526 15.575 73.555 16.585H73.5499ZM83.1208 7.04C84.3317 2.895 82.031 0 75.8203 0H61.86L62.7884 2.2L57.1831 21.68L54.7714 24H69.4078C74.7356 24 79.5336 23.5 80.8807 18.915C81.8696 15.545 80.8858 12.69 79.8464 12.08C80.916 11.575 82.3186 9.77 83.1208 7.04ZM41.1896 18.74H51.3709H51.376C51.418 18.7175 51.4112 18.7212 51.3897 18.733C51.2824 18.7916 50.8087 19.0503 54.2568 17.225L52.1984 23.995H30.6853L32.9961 21.69L38.7527 2.32L37.7891 0H46.694L41.1896 18.74Z" fill="black"></path> </svg>
                    </Link>
                </div>
                <ul className='nav-menu'>
                    <li>
                        <Link to="/quan-ao">QUẦN ÁO</Link>
                        <ul className='sub-menu'>
                            <li>
                                <Link to="/ao">Áo</Link>
                                <ul className='sub-menu'>
                                    <li><Link to="/ao-thun">Áo thun</Link></li>
                                    <li><Link to="/ao-somi">Áo sơ mi</Link></li>
                                    <li><Link to="/ao-khoac">Áo khoác</Link></li>
                                    <li><Link to="/ao-polo">Áo polo</Link></li>
                                    <li><Link to="/ao-sat-nach">Áo sát nách</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/quan">Quần</Link>
                                <ul className='sub-menu'>
                                    <li><Link to="/quan-jogger">Quần jogger</Link></li>
                                    <li><Link to="/quan-short">Quần short</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/danh-cho-nu">Dành cho nữ</Link>
                                <ul className='sub-menu'>
                                    <li><Link to="/ao-nu">Áo nữ</Link></li>
                                    <li><Link to="/quan-nu">Quần nữ</Link></li>
                                    <li><Link to="/chan-vay">Chân váy</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/non">MŨ - NÓN</Link>
                    </li>
                    <li>
                        <Link to="/giay-dep">GIÀY - DÉP</Link>
                        <ul className='sub-menu'>
                            <li><Link to="/giay-sneakers">Giày Sneakers</Link></li>
                            <li><Link to="/giay-sandals">Giày Sandals</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/tui-vi">TÚI VÍ</Link>
                        <ul className='sub-menu'>
                            <li><Link to="/balo">Balo</Link></li>
                            <li><Link to="/tui-xach">Túi xách</Link></li>
                            <li><Link to="/tui-bao-tu">Túi bao tử</Link></li>
                            <li><Link to="/tui-deo-cheo">Túi đeo chéo</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/sales">SALES</Link>
                    </li>
                </ul>
            </div>
            <div className='header-right'>
                <div className='search'>
                    <input
                        type="text"
                        class="search-input"
                        placeholder="Nhập tên sản phẩm..."
                        value={searchField}
                        onChange={handleSearch}
                        onKeyDown={handleKeyPress}
                    />
                    <Link className='handleSearch' to="/search"><i className="fa-solid fa-magnifying-glass"></i></Link>
                </div>

                <div className='cart'>
                    <Link className='handleCart' to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
                </div>

                <div className='account'>
                    <Link className='handleAccount' to="/account/login"><i className="fa-solid fa-user"></i></Link>
                </div>
            </div>
        </div>
    );
}
export default Header;