import React, { useState, useEffect } from 'react';
import DATAQUAN from '../../api/DataQuan';
import DATAAO from '../../api/DataAo';
import DATANU from '../../api/DataNu';
import DATAGIAY from '../../api/DataGiay';
import DATATUI from '../../api/DataTui';
import DATANON from '../../api/DataNon';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './style.css';

const Search = ({ searchTerm }) => {
    const [products, setProducts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        Promise.all([DATAQUAN, DATAAO, DATANU, DATAGIAY, DATATUI, DATANON])
            .then(([dataQuan, dataAo, dataNu, dataGiay, dataTui, dataNon]) => {
                const combinedData = [...dataQuan, ...dataAo, ...dataNu, ...dataGiay, ...dataTui, ...dataNon];
                setProducts(combinedData);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        if (searchTerm) {
            const results = products.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(results);
        } else {
            <div className="empty-product">
                <img src="https://file.hstatic.net/200000642007/file/nodata_f5cef3c4919e47f8a881eaaacb1f6a1c.png" alt="Tìm kiếm" />
                <span>Không tìm thấy kết quả cho tìm kiếm của bạn<br />Thử một từ khóa khác</span>
            </div>
        }
    }, [searchTerm, products]);

    function StarRating({ rating }) {
        return (
            <div>
                {Array(5).fill().map((_, i) => (
                    <span key={i} style={{ color: 'white' }}>
                        {i < rating ? '⭐' : '☆'}
                    </span>
                ))}
            </div>
        );
    }

    if (!searchTerm || !searchResults.length) {
        return (
            <div className="empty-product">
                <img src="https://file.hstatic.net/200000642007/file/nodata_f5cef3c4919e47f8a881eaaacb1f6a1c.png" alt="Tìm kiếm" />
                <span>Không tìm thấy kết quả cho tìm kiếm của bạn<br />Thử một từ khóa khác</span>
            </div>
        );
    }

    return (
        <div className='search-product'>
            <div className='result'>
                <h2>Kết quả tìm kiếm cho từ khóa "{searchTerm}"</h2>
            </div>
            <div className='products'>
                {error ? (
                    <div>Error: {error}</div>
                ) : isLoading ? (
                    <div>Loading...</div>
                ) : (
                    searchResults.map((product) => (
                        <div className="card" key={product.id}>
                            <div className="basicInfo">
                                <div className="images">
                                    <div className="colors">
                                        {product.colors.map((color) => (
                                            <div
                                                key={color}
                                                className={`${product.checkImg[color] && 'active'}`}
                                                style={{
                                                    marginRight: '10px',
                                                    backgroundColor: color,
                                                    width:   25,
                                                    height:   25,
                                                    borderRadius: '50%',
                                                    cursor: 'pointer',
                                                }}
                                            ></div>
                                        ))}
                                    </div>
                                    <div className="img">
                                        {Object.keys(product.checkImg).map((item) => {
                                            if (product.checkImg[item]) {
                                                return (
                                                    <LazyLoadImage
                                                        key={item}
                                                        src={product.linkImg[item]}
                                                        alt={product.name}
                                                        placeholderSrc="/path/to/placeholder.jpg"
                                                        effect="blur"
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
                                </div>
                                <div className="addCard">
                                    <i className="fa-solid fa-basket-shopping"></i>
                                </div>
                            </div>
                            <div className="mores">
                                <StarRating rating={product.rating} />
                                <div className="price">{product.price}</div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Search;
