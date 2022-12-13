import React from "react";
import "../styles/bookings.css";

import carData from "../assets/dummy-data/booking-cars.js";
import CarItem from "../components/UI/CarItem";

const Bookings = () => {
  return (
    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title">Booking</h2>

        <div className="filter__widget-wrapper">
          <div className="filter__widget-01">
            <select>
              <option value="Hatch">Hatch</option>
              <option value="Sedan">Sedan</option>
              <option value="Picape">Picape</option>
            </select>
          </div>

          <div className="filter__widget-01">
            <select>
              <option value="Compacto">Compacto</option>
              <option value="Médio">Médio</option>
              <option value="Grande">Grande</option>
            </select>
          </div>
        </div>

        <div className="booking__car-list">
          {carData?.map((item) => (
            <CarItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
