import HotelDetail from "../../Component/HotelDetail/HotelDetail";
import Navbar from "../../Component/NavBars/Navbar";
import Register from "../../Component/Registers/Register";
import Footer from "../../Component/Footers/Footer";

const Detail = () => {
  return (
    <div>
      {/* Component để render thanh tiêu đề ở đầu trang */}
      <Navbar />
      {/* Component để render phần nội dung */}
      <HotelDetail />
      {/* Component để render thanh đăng ky ở gần cuối trang */}
      <Register />
      {/* Component để render thanh footer ở cuối trang */}
      <Footer />
    </div>
  );
};
export default Detail;
