import React from "react";
import "../styles/bookings.css";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import carData from "../assets/dummy-data/booking-cars.js";
import CarItem from "../components/UI/CarItem";
import { useState } from 'react'
import { Link } from "react-router-dom";


const Bookings = () => {


  const [searchTerm, setSearchTerm] = useState("");

  /*   const [state, setState] = useState([
      {
        startDate: new Date(),
        endDate: null,
        key: 'selection'
      }
    ]); */
  return (


    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title">Alugue seu Carro</h2>

        <div className="todos">
          <Link to="/Bookings">
            <p>Clique aqui para filtrar</p>
            <br />
          </Link>
        </div>

      </div>
      {/*  <div className="filter__widget-01"> Selecione o Período Desejado:
        <DateRange
          editableDateInputs={true}
          onChange={item => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />

      </div> */}

      <div className="booking__car-list">

        {carData?.map((item) => (
          <CarItem key={item.id} item={item} />
        ))}
      </div>





    </div>



  );


};



export default Bookings;
