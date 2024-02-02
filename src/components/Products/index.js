import React, { useState } from 'react';
import PRODUCTS from '../../api/ProductsData';
import './style.css';

const Products = () => {
    const [products, setProducts] = useState(PRODUCTS);
    const handleChooseColor = (id, color) => {
        setProducts((prev) => {
            return prev.map((product) => {
                if (product.id === id) {
                    let newCheckImg = {};
                    //Change all property checkImg false, but color clicked = true
                    Object.keys(product.checkImg).map((item) => {
                        product.checkImg[item] = false;
                        newCheckImg = { ...product.checkImg, [color]: true };
                        return null;
                    });

                    return { ...product, checkImg: newCheckImg };
                } else {
                    return product;
                }
            });
        });
    };

    return (
        products.map((product) => (
            <div className="card" key={product.id}>
                <div className="basicInfo">
                    <div className="images">
                        <div className="colors">
                            {product.colors.map((color) => (
                                <div
                                    key={color}
                                    className={` ${product.checkImg[color] && 'active'}   `}
                                    style={{
                                        marginRight: '10px',
                                        backgroundColor: color,
                                        width: 25,
                                        height: 25,
                                        borderRadius: '50%',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => handleChooseColor(product.id, color)}
                                ></div>
                            ))}
                        </div>
                        <div className="img">
                            {Object.keys(product.checkImg).map((item) => {
                                if (product.checkImg[item]) {
                                    return (
                                        <img
                                            key={item}
                                            src={product.linkImg[item]}
                                            alt={product.name}
                                        />
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </div>

                    </div>
                    <div className='title'>
                        <div className="name">{product.name}</div>
                    </div><div className="addCard">
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
                    <div className="price">{product.price}</div>
                </div>
            </div>
        ))
    );
};
export default Products;