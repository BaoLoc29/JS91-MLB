// import ProductQuans from '../../components/ProductQuans';
import { Link } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { TbListSearch } from "react-icons/tb";
import ProductTuiVi from '../../components/ProductTuiVi';
const TuiVi = () => {
    return (
        <div className='out-fit'>
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
                                <span itemprop='name'>Túi ví</span>
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
            <div className='list-product-quan'>
                <ProductTuiVi />
            </div>
        </div>
    );
}
export default TuiVi;