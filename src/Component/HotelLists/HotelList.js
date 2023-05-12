import React from "react";
import { Link } from "react-router-dom";
import "./HotelList.css";

function HotelList(props) {
  return (
    <div className="hotelList">
      <div className="hotelListItem">
        <img src={props.image} alt="HotelList" className="hotelListImg" />
        <Link to="/detail" className="hotelName">
          {props.name}
        </Link>
        <span className="hotelCity">{props.city}</span>
        <span className="hotelPrice">Starting from ${props.price}</span>
        <div className="hotelRating">
          <button>{props.rate}</button>
          <span>{props.type}</span>
        </div>
      </div>
    </div>
  );
}

export default HotelList;
