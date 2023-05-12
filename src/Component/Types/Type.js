import React from "react";
import "./Type.css";

const Type = (props) => {
  return (
    <div className="type">
      <div className="typeItem">
        <img src={props.image} alt="HotelType" className="typeImg" />
        <div className="typeTitles">
          <h1>{props.name}</h1>
          <h2>{props.count} Hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default Type;
