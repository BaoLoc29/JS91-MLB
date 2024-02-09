import ProductGiaySneaker from '../../components/ProductGiaySneaker';
import { Link } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { TbListSearch } from "react-icons/tb";
const GiaySneakers = () => {
    return (
        <div className='out-fit'>
            <h2>Giày sneaker</h2>
            <div className='collection'>
                <div className='title-collection'>
                    <div className='title-collection-inner'>
                        <ol className='breadcrumb'>
                            <li className='breadcrumb-item'>
                                <Link itemprop='name' to='/'>Trang chủ</Link>
                                <IoIosArrowForward />
                            </li>
                            <li className='breadcrumb-item'>
                                <span itemprop='name'>Danh mục</span>
                                <IoIosArrowForward />
                            </li>
                            <li className='breadcrumb-item active'>
                                <span itemprop='name'>Giày sneaker</span>
                            </li>
                        </ol>
                    </div>
                    <div className='wrapper-title-collection'>
                        <div className='option-filter-collection'>
                            <div className='filter-collection'>
                                <span>Bộ lọc</span>
                                <TbListSearch style={{ fontSize: 18 }} />
                            </div>
                            <div className='sort-collection'>
                                <span>Sắp xếp</span>
                                <IoIosArrowDown style={{ fontSize: 18 }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='list-product-ao'>
                <ProductGiaySneaker />
            </div>
        </div>
    );
}
export default GiaySneakers;