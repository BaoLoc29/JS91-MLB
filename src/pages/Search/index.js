import React, { useState, useEffect } from 'react';
import DATAQUAN from '../../api/DataQuan';
import DATAAO from '../../api/DataAo';
import DATANU from '../../api/DataNu';
import DATAGIAY from '../../api/DataGiay';
import DATATUI from '../../api/DataTui';
import DATANON from '../../api/DataNon';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ReactPaginate from 'react-paginate';
import './style.css';
import { Link } from 'react-router-dom';
const Search = ({ searchTerm }) => {
    const [products, setProducts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 12;
    // Get the current items for the current page
    const offset = currentPage * itemsPerPage;
    const currentItems = searchResults.slice(offset, offset + itemsPerPage);

    // Handle page change
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };
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
    useEffect(() => {
        Promise.all([DATAQUAN, DATAAO, DATANU, DATAGIAY, DATATUI, DATANON])
            .then(([dataQuan, dataAo, dataNu, dataGiay, dataTui, dataNon]) => {
                const combinedData = [...dataQuan, ...dataAo, ...dataNu, ...dataGiay, ...dataTui, ...dataNon];
                setProducts(combinedData);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);
    // sự kiện xảy ra khi người dùng nhập vào trong input tìm kiếm
    useEffect(() => {
        // đặt setSearchResults về mảng trống khi input bị thay đổi
        setSearchResults([]);
    }, [searchTerm]);
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
                ) : (
                    currentItems.map((product) => (
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
                                                    width: 25,
                                                    height: 25,
                                                    borderRadius: '50%',
                                                    cursor: 'pointer',
                                                }}
                                                onClick={() => handleChooseColor(product.id, color)}
                                            ></div>
                                        ))}
                                    </div>
                                    <Link to={`/product/${product.id}`}>
                                        <div className="img">
                                            {product.colors.map((color) => {
                                                const isSelected = product.checkImg[color];
                                                const imageUrl = isSelected && product.linkImg[color] && product.linkImg[color][0];
                                                return imageUrl ? (
                                                    <LazyLoadImage
                                                        key={color}
                                                        src={imageUrl}
                                                        alt={product.name}
                                                        placeholderSrc="/path/to/placeholder.jpg"
                                                        effect="blur"
                                                    />
                                                ) : null;
                                            })}
                                        </div>
                                    </Link>
                                </div>
                                <div className='title'>
                                    <Link to={`/product/${product.id}`}><div className="name">{product.name}</div></Link>
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
                <div className='pages'>
                    <ReactPaginate
                        previousLabel={<IoIosArrowBack />}
                        nextLabel={<IoIosArrowForward />}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={Math.ceil(searchResults.length / itemsPerPage)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}

                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                    />
                </div>
            </div>
        </div>
    );
};

export default Search;