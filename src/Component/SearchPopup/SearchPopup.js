import React, { useState } from "react";
import "./SearchPopup.css";
import SearchList from "../SearchList/SearchList";
import { searchData } from "../SearchList/SearchData";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const SearchPopup = () => {
  // Ẩn hiện calendar khi click vào ô chọn ngày
  const [openDate, setOpenDate] = useState(false);
  const openCalendar = () => {
    setOpenDate(!openDate);
  };

  // State sử dụng trong daterange
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    // Component để render khung tìm kiếm trên trái page
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <label>Destination</label>
            <input placeholder="" type="text" />
          </div>
          <div className="lsItem">
            <label>Check-in Date</label>
            <span className="lsDate" onClick={openCalendar}>
              {`${format(date[0].startDate, "dd/MM/yyyy")} 
            to ${format(date[0].endDate, "dd/MM/yyyy")}`}{" "}
            </span>
            {/* Khi giá trị của openDate=true thì hiển thị dateRange */}
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="lsItem">
            <label>Options</label>
            <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder=""
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input
                  type="number"
                  min={0}
                  className="lsOptionInput"
                  placeholder=""
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <button>Search</button>
        </div>
        {/* Component để render các kết quả của việc tìm kiếm nằm ở bên phải của Page */}
        <div className="listResult">
          {searchData.map((item, i) => (
            <SearchList
              key={i}
              image={item.image_url}
              name={item.name}
              price={item.price}
              rate={item.rate}
              type={item.type}
              distance={item.distance}
              tag={item.tag}
              free_cancel={item.free_cancel}
              rate_text={item.rate_text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
