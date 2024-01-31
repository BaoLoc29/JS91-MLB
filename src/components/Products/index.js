import { useState } from 'react';
import './style.css';

const Products = () => {
    const [selectedColor, setSelectedColor] = useState('white');

    const handleColorChange = (event) => {
        setSelectedColor(event.target.id);
    };

    return (
        <div className="card">
            <div className="basicInfo">
                <div className="images">
                    <div className="img">
                        <div className="item">
                            <input type="radio" name="color" id="white" checked={selectedColor === 'white'} onChange={handleColorChange}></input>
                            <img src="https://product.hstatic.net/200000642007/product/50whs_3asxclr3n_2_dbabf90e4a464749a2d3f595328317e9_d1b731d275f046579f9b112f224ebe4b_grande.jpg" alt='img-product'></img>
                        </div>
                        <div className="item">
                            <input type="radio" name="color" id="black" checked={selectedColor === 'black'} onChange={handleColorChange}></input>
                            <img src="https://product.hstatic.net/200000642007/product/50bks_3lpqm0333_2_58a0da1d851640be8ec6f72e4de32850_6774837eebde4af5a0d56b0310fb6265_grande.jpg" alt='img-product'></img>
                        </div>
                    </div>
                </div>
                <div className="colors">
                    <label htmlFor="white">
                        <div className="name">white</div>
                        <div className="ellipse" style={{ background: '#B6D5E0' }}></div>
                    </label>

                    <label htmlFor="black">
                        <div className="name">Black</div>
                        <div className="ellipse" style={{ background: '#2B2B2B' }}></div>
                    </label>
                </div>
                <div className='title'>
                    <div className="name">Giày sneakers unisex cổ thấp Chunky Liner Mid Lux</div>
                </div>
                <div className="addCard">
                    <i className="fa-solid fa-basket-shopping"></i>
                </div>
            </div>
            <div className="mores">
                <div className="stars">
                    <i className="fa-regular fa-star text-yellow"></i>
                    <i className="fa-regular fa-star text-yellow"></i>
                    <i className="fa-regular fa-star text-yellow"></i>
                    <i className="fa-regular fa-star text-yellow"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
                <div className="price">1,000,000đ</div>
            </div>
        </div>
    );
};

export default Products;
