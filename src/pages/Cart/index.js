import './style.css'
import { Link } from 'react-router-dom';
const Cart = () => {
    return (
        <div className="cart-container">
            <div className="containe">
                <div className="cart-top-wrap">
                    <div className="cart-top">
                        <div className="cart-top-cart cart-top-item">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </div>
                        <div className="cart-top-address cart-top-item">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="cart-top-payment cart-top-item">
                            <i className="fa-solid fa-money-check "></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="containe">
                <div className="cart-content-row">
                    <div className="cart-content-left">
                        <table>
                            <tr>
                                <th>Sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Màu</th>
                                <th>Size</th>
                                <th>SL</th>
                                <th>Thành tiền</th>
                                <th>Xóa</th>
                            </tr>
                            <tr>
                                <td><img src="https://product.hstatic.net/200000642007/product/50bks_3atsl0134_1_1bb3848de8f84e66b01e56f66edd5898_51bcbdb5334245c28e49a77eaa3300b1_master.jpg" alt="" /></td>
                                <td>
                                    <p>Áo Thun Nam S.Café Thêu chữ Coffee Lovers Form Loose</p>
                                </td>
                                <td><img className='img-color' src="https://product.hstatic.net/200000642007/product/icon_50bks_3atsl0134_c4c3a113f5314dbaa63148d13a9b5c46_61071294af4d4a1f8ff64de367e52895.jpg" alt="" /></td>
                                <td>
                                    <p>FreeSize</p>
                                </td>
                                <td><input type="number" value="1" min="1" /></td>
                                <td>
                                    <p>520.000 đ</p>
                                </td>
                                <td>
                                    <button className="delete-cart"><i className="fa-solid fa-trash"
                                        style={{ fontSize: 30 }}></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td><img src="https://product.hstatic.net/200000642007/product/07mtl_3atsl0134_1_fd8f1c9cc034497e9619df8e5d7911c8_f02e695ec8c74f5e9143d96aa73eb121_master.jpg" alt="" /></td>
                                <td>
                                    <p>Áo Thun Nam S.Café Thêu chữ Coffee Lovers Form Loose</p>
                                </td>
                                <td><img className='img-color' src="https://product.hstatic.net/200000642007/product/icon_07mtl_3atsl0134_169e1623abd7478ba34ce81be48c182e_0f2511bd35b1432eb2895465e3f2ea19.jpg" alt="" /></td>
                                <td>
                                    <p>FreeSize</p>
                                </td>
                                <td><input type="number" value="1" min="1" style={{ width: 40 }} /></td>
                                <td>
                                    <p>520.000 đ</p>
                                </td>
                                <td>
                                    <button className="delete-cart"><i className="fa-solid fa-trash"
                                        style={{ fontSize: 30 }}></i></button>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="cart-content-right">
                        <table>
                            <tr>
                                <th colspan="2" style={{ textAlign: 'center' }}>TỔNG TIỀN GIỎ HÀNG</th>
                            </tr>
                            <tr>
                                <td>Tổng tiền sản phẩm</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Tổng tiền hàng</td>
                                <td>
                                    <p>520.000 đ</p>
                                </td>
                            </tr>
                            <tr>
                                <td><b>Tạm tính</b></td>
                                <td>
                                    <p><b>520.000 đ</b></p>
                                </td>
                            </tr>
                        </table>
                        <div className="cart-content-right-text">
                            <p style={{ color: 'red' }}>
                                Miễn"
                                <b style={{ color: 'red' }}>đổi trả</b>
                                "đối với sản phẩm đồng giá / sale trên 50%
                            </p>
                        </div>
                        <div className="cart-content-right-text-button">
                            <button>Tiếp tục mua hàng</button>
                            <button>Thanh toán</button>
                        </div>
                        <div className="cart-content-right-login">
                            <p>Hãy <Link to="/account/login">Đăng nhập</Link> tài khoản của bạn để tích điểm thành viên
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cart;