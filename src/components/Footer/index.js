import { Link } from "react-router-dom";
import React from "react";
import './style.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-aboutme">
                        <h2 className="footer-title">Hỗ trợ</h2>
                        <ul className="list-item">
                            <li>
                                <Link to="/he-thong-cua-hang" >Hệ thống cửa hàng</Link>
                            </li>
                            <li>
                                <Link to="/lien-he" >Liên hệ</Link>
                            </li>
                            <li>
                                <Link to="/chinh-sach-bao-mat" >Chính sách bảo mật</Link>
                            </li>
                            <li>
                                <Link to="/dieu-khoan-su-dung" >Điều khoản sử dụng</Link>
                            </li>
                            <li>
                                <Link to="/chinh-sach-van-chuyen" >Chính sách vận chuyển</Link>
                            </li>
                            <li>
                                <Link to="/chinh-sach-thanh-toan" >Chính sách thanh toán</Link>
                            </li>
                            <li>
                                <Link to="/chinh-sach-doi-tra" >Chính sách đổi trả</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-pay">
                        <h2 className="footer-title">Thanh toán</h2>
                        <ul className="list-item">
                            <li>
                                <Link to="/" >Visa / Mastercard / JCB</Link>
                            </li>
                            <li>
                                <Link to="/" >ATM / Internet Banking</Link>
                            </li>
                            <li>
                                <Link to="/" >Quét mã QR</Link>
                            </li>
                            <li>
                                <Link to="/" >Mua trước trả sau</Link>
                            </li>
                            <li>
                                <Link to="/" >Ví điện tử</Link>
                            </li>
                            <li>
                                <Link to="/" >Thanh toán khi nhận hàng (COD)</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-info">
                        <div className="info-top">
                            <Link to="/" ><i className="fa-brands fa-instagram"></i></Link>
                            <Link to="/" ><i className="fa-brands fa-facebook"></i></Link>
                            <Link to="/" ><i className="fa-brands fa-linkedin-in"></i></Link>
                        </div>
                        <div className="info-bottom">
                            <div className="info-item">
                                <i className="fa-solid fa-paper-plane"></i>
                                <p>Noida, Uttar Pradesh</p>
                            </div>
                            <div className="info-item">
                                <i className="fa-solid fa-mobile-screen-button"></i>
                                <p>+91 123456789</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-map">
                        <div className="map-mlb">
                            <iframe
                                title="MLB Nguyễn Trãi"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5517234746326!2d106.68539677596307!3d10.768990131972402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f6b938e620f%3A0x6b754f1ce54b2ab!2zTUxCIE5ndXnhu4VuIFRyw6Np!5e0!3m2!1svi!2s!4v1706085183717!5m2!1svi!2s"
                                width="550"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;