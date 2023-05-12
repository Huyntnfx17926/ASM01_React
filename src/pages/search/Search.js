import Navbar from "../../Component/NavBars/Navbar";
import SearchPopup from "../../Component/SearchPopup/SearchPopup";
import Footer from "../../Component/Footers/Footer";

const Search = () => {
  return (
    <div>
      {/* Component để render thanh tiêu đề ở đầu trang */}
      <Navbar />
      {/* Component để render phần nội dung của trang */}
      <SearchPopup />
      {/* Component để render phần footer ở cuối trang*/}
      <Footer />
    </div>
  );
};

export default Search;
