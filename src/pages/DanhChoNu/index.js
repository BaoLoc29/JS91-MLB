import { Outlet } from "react-router-dom";
const DanhChoNu = () => {
    return (
        <div className="danh-cho-nu">
            <h1>Dành cho nữ</h1>
            <Outlet/>
        </div>
    );
}
export default DanhChoNu;