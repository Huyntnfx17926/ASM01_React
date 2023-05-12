import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import "./Header.css";

const Header = () => {
  // Hàm dẫn link đến trang Search
  const gotoSearch = () => {
    window.location.replace("/search");
  };

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

  // State sử dụng trong Options
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const optionHandle = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDescription">
          Get rewarded for your travels - unlock instant saving of 10% or more
          with a free account
        </p>
        <button className="headerBtn">Sign in / Register</button>
      </div>
      <div className="headerSearch">
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed} className="headerIcon" />
          <input
            className="color: lightgray;
            cursor: pointer; headerSearchInput"
            placeholder="Where are you going?"
            type="text"
          />
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
          <span className="headerSearchText" onClick={openCalendar}>
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
              className="headerDate"
            />
          )}
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faPerson} className="headerIcon" />
          <span
            onClick={() => setOpenOptions(!openOptions)}
            className="headerSearchText"
          >{`${options.adult} adult ${options.children} children ${options.room} room`}</span>
          {openOptions && (
            <div className="options">
              <div className="optionItem">
                <span className="openText">Adult</span>
                <div className="optionCounter">
                  <button
                    disabled={options.adult <= 1}
                    className="openCounterButton"
                    onClick={() => optionHandle("adult", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button
                    className="openCounterButton"
                    onClick={() => optionHandle("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="openText">Children</span>
                <div className="optionCounter">
                  <button
                    disabled={options.children <= 0}
                    className="openCounterButton"
                    onClick={() => optionHandle("children", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                    {options.children}
                  </span>
                  <button
                    className="openCounterButton"
                    onClick={() => optionHandle("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="openText">Room</span>
                <div className="optionCounter">
                  <button
                    className="openCounterButton"
                    disabled={options.room <= 1}
                    onClick={() => optionHandle("room", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button
                    className="openCounterButton"
                    onClick={() => optionHandle("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <button className="SearchBtn" onClick={gotoSearch}>
          Search
        </button>
      </div>
    </div>
  );
};
export default Header;
