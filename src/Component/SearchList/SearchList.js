import React from "react";
import "./SearchList.css";

const SearchList = (props) => {
  return (
    <div className="searchItem">
      <img src={props.image} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{props.name}</h1>
        <span className="siDistance">{props.distance} from center</span>
        <span className="siTaxiOp">{props.tag}</span>
        <span className="siSubtitle">{props.description}</span>
        <span className="siFeatures">{props.type}</span>
        {props.free_cancel && (
          <>
            <span className="siCancelOp">Free Cancelation</span>
            <span className="siCancelOpSubtitle">
              You can cancel later, so lock in this great price today!
            </span>
          </>
        )}
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>{props.rate_text}</span>
          <button>{props.rate}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">${props.price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchList;
