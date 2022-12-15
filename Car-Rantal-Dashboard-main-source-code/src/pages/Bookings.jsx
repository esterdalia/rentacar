import React from "react";
import "../styles/bookings.css";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import carData from "../assets/dummy-data/booking-cars.js";
import CarItem from "../components/UI/CarItem";
import { DateRange } from "react-date-range";
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

        {/* <div className="filter__widget-01">
          <p>Filtrar por categoria</p>
          <select onChange={(e) => setSearchTerm(e.target.value)}>

            <option value="Carro Hatch Compacto 1.0">Carro Hatch Compacto 1.0</option>
            <option value="Carro Hatch Médio">Carro Hatch Médio</option>
            <option value="Carro Sedan Médio">Carro Sedan Médio</option>
            <option value="Carro Picape Compacta">Carro Picape Compacta</option>

          </select>
        </div> */}
        {/*  <div className="filter__widget-01">
          <p>Filtrar por Cidade</p>
          <select onChange={(e) => setSearchTerm(e.target.value)}>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Fortaleza">Fortaleza</option>
            <option value="Manaus">Manaus</option>
          </select>
        </div>
 */}
        <input
          type="text"
          placeholder="Pesquisar por categoria"
          className="form-control"
          onChange={(e) => setSearchTerm(e.target.value)}

        />
        <div className="todos">
          <Link to="/AllCars">
            <p>Ou clique aqui para visualizar todos os carros</p>
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

      {/* <div className="booking__car-list">

        {carData?.map((item) => (
          <CarItem key={item.id} item={item} />
        ))}
      </div> */}

      <div className="booking__car-list">

        {carData.filter((val) => {
          if (searchTerm === val.category) {
            return val;
          }

        }).map((item) => (
          <CarItem key={item.id} item={item} />
        ))
        }

      </div>


    </div>



  );


};



export default Bookings;
