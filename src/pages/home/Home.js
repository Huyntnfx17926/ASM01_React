import React from "react";
import "./Home.css";
import Navbar from "../../Component/NavBars/Navbar";
import Header from "../../Component/Headers/Headers";
import Card from "../../Component/UI/Card";
import City from "../../Component/Citys/City";
import Type from "../../Component/Types/Type";
import { DataCity } from "../../Component/Citys/DataCity";
import { typeData } from "../../Component/Types/TypeData";
import HotelList from "../../Component/HotelLists/HotelList";
import { hotelData } from "../../Component/HotelLists/HotelListData";
import Registers from "../../Component/Registers/Register";
import Footer from "../../Component/Footers/Footer";

const Home = () => {
  // Em dùng tạo file dữ liệu riêng sau đó em import vào
  // Em call từng cái vào
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Card>
          {DataCity.map((item, index) => (
            <City
              image={item.image}
              name={item.name}
              subText={item.subText}
              key={index}
            />
          ))}
        </Card>
        <h2 className="homeTitle">Browse by property type</h2>
        <Card>
          {typeData.map((item, index) => (
            <Type
              name={item.name}
              count={item.count}
              image={item.image}
              key={index}
            />
          ))}
        </Card>
        <h2 className="homeTitle">Home guests love</h2>
        <Card className="hotelList">
          {hotelData.map((item, index) => (
            <HotelList
              image={item.image_url}
              name={item.name}
              price={item.price}
              city={item.city}
              rate={item.rate}
              type={item.type}
              key={index}
            />
          ))}
        </Card>
      </div>
      <Registers />
      <Footer />
    </div>
  );
};

export default Home;
