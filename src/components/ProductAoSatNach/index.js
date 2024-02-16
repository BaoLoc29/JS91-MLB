import React, { useState, useEffect } from 'react';
import DATAAO from '../../api/DataAo';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Import CSS cho hiệu ứng blur
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

const ProductAoSatNach = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Lọc danh sách sản phẩm thuộc danh mục Áo khoác
        const filteredProducts = DATAAO.filter(product => product.category === 'Áo sát nách');
        setProducts(filteredProducts);
    }, []);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 12;
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

    // Get the current items for the current page
    const offset = currentPage * itemsPerPage;
    const currentItems = products.slice(offset, offset + itemsPerPage);

    // Handle page change
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };
    return (
        <div className='products'>
            {currentItems.map((product) => (
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
                        </div><div className="addCard">
                            <i className="fa-solid fa-basket-shopping"></i>
                        </div>
                    </div>
                    <div className="mores">
                        <StarRating rating={product.rating} />
                        <div className="price">{product.price}</div>
                    </div>
                </div>
            ))}
            <div className='pages'>
                <ReactPaginate
                    previousLabel={<IoIosArrowBack />}
                    nextLabel={<IoIosArrowForward />}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={Math.ceil(products.length / itemsPerPage)}
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
    );
};
export default ProductAoSatNach;