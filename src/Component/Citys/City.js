import React from "react";
import "./City.css";

const City = (props) => {
  return (
    <div className="city">
      <div className="cityItem">
        <img src={props.image} alt="city" className="cityImg" />
        <div className="cityTitles">
          <h1>{props.name}</h1>
          <h1>{props.subText}</h1>
        </div>
      </div>
    </div>
  );
};

export default City;
