import React, { useState, useEffect } from 'react';
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { BiRuler } from "react-icons/bi";
import DATAAO from '../../api/DataAo';
import DATAQUAN from '../../api/DataQuan';
import DATANU from '../../api/DataNu';
import './style.css';

const ProductDetail = () => {
    const { id } = useParams();
    const productId = id;
    const [products, setProducts] = useState([]);
    const [productDetail, setProductDetail] = useState(null);

    useEffect(() => {
        // Tải tất cả ba dữ liệu một lúc
        Promise.all([DATAQUAN, DATAAO, DATANU])
            .then(([dataQuan, dataAo, dataNu]) => {
                // Kết hợp ba dữ liệu vào mảng products
                const combinedData = [...dataQuan, ...dataAo, ...dataNu];
                setProducts(combinedData);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    useEffect(() => {
        // Tìm sản phẩm chi tiết dựa trên productId từ mảng đã kết hợp
        const detail = products.find(item => item.id === productId);
        setProductDetail(detail);
    }, [products, productId]);

    const [selectedImage, setSelectedImage] = useState('');
    const [selectedColorImages, setSelectedColorImages] = useState([]);
    const [selectedColor, setSelectedColor] = useState('');

    useEffect(() => {
        if (productDetail) {
            const initialSelectedImage = productDetail.linkImg[productDetail.colors[0]][0];
            setSelectedImage(initialSelectedImage);
            setSelectedColorImages(productDetail.linkImg[productDetail.colors[0]]);
            setSelectedColor(productDetail.colors[0]);
        }
    }, [productDetail]);

    const handleChooseColor = (color) => {
        const selectedColorImages = productDetail.linkImg[color];
        setSelectedColorImages(selectedColorImages);
        setSelectedImage(selectedColorImages[0]);
        setSelectedColor(color);
    };

    if (!productDetail) {
        return <div>Sản phẩm không tồn tại</div>;
    }

    function handleImageClick(imageUrl) {
        setSelectedImage(imageUrl);
    }

    function StarRating({ rating }) {
        return (
            <div className="star-rating">
                {Array(5).fill().map((_, i) => (
                    <span key={i} style={{ color: 'black', fontSize: 20 }}>
                        {i < rating ? '⭐' : '☆'}
                    </span>
                ))}
            </div>
        );
    }

    return (
        <div className="product-detail">
            <div className="container">
                <div className="wrapper-product-inner" key={productDetail.id}>
                    <div className="wrapper-list-thumb-image-detail">
                        <div className="list-thumb-image-detail">
                            {selectedColorImages.map((image, index) => (
                                <div className="item-image-detail" key={index}>
                                    <img
                                        src={image}
                                        alt={`${productDetail.name} ${selectedColor}`}
                                        onClick={() => handleImageClick(image)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="image-detail">
                            <img src={selectedImage} alt="Selected product color" />
                        </div>
                    </div>

                    <div className="contain-product-detail">
                        <div className="info-product-detail">
                            <div className="heading-product-detail">
                                <div className="title-product-detail">
                                    <h1>{productDetail.name}</h1>
                                </div>
                                <div className="wishlist-product-detail">
                                    <Link to="#"><IoShareSocialOutline /></Link>
                                    <Link to="#"><FaRegHeart /></Link>
                                </div>
                            </div>
                            <StarRating rating={productDetail.rating} />
                            <div className="price-product-detail">
                                <div className="price">{productDetail.price}</div>
                            </div>
                            <div className="swatch-color">
                                {productDetail.colors.map((color) => (
                                    <div
                                        key={color}
                                        className={`item-color ${color === selectedColor ? 'active' : ''}`} 
                                        style={{
                                            marginRight: '5px',
                                            backgroundColor: color,
                                            width: 40,
                                            height: 40,
                                            borderRadius: '50%',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => handleChooseColor(color)}
                                    ></div>
                                ))}
                            </div>
                            <div className="selector-product-detail">
                                <div className="option-swatch">
                                    <div className="title-swatch">
                                        <h4>Chọn kích thước</h4>
                                        <span className="open-size-chart"><BiRuler style={{ margin: '0 10px', fontSize: '20px' }} /> Hướng dẫn kích thước</span>
                                    </div>
                                    <div className="swatch-size" data-index="option2">
                                        <div className="item-swatch active">FreeSize</div>
                                    </div>
                                </div>
                                <div className="action-detail">
                                    <button id="btn-addtocart" fdprocessedid="dgl4vp">
                                        Thêm vào giỏ
                                    </button>
                                    <button id="btn-buynow" fdprocessedid="cjsonf">
                                        Mua ngay
                                    </button>
                                </div>
                                <div className="details__promotion">
                                    <div className="box-gift-detail">
                                        <b>Lắc Rồng đón vận may</b>
                                        Tặng Bộ trò chơi Rồng Lắc Lục Sắc độc quyền cho mọi hóa đơn mua hàng nguyên giá từ 5.990.000Đ.
                                        <br />
                                        Thời gian: 31.01 - 09.02.2024
                                        <br />
                                        Ưu đãi không áp dụng cùng với các CTKM khác
                                        <br />
                                        <b>MLB Chào bạn mới</b>
                                        Nhận ngay ưu đãi 10% khi đăng ký thành viên và mua đơn hàng nguyên giá đầu tiên tại website*
                                        <br />
                                        Nhập mã: MLBWELCOME
                                        <br />
                                        Ưu đãi không áp dụng cùng với các CTKM khác
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;
