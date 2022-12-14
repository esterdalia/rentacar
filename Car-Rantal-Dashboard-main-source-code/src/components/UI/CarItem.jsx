import React from "react";

const CarItem = (props) => {
  const { category, type, rentPrice, imgUrl, carName } = props.item;
  return (
    <div className="car__item">
      <div className="car__item-top">
        <div className="car__item-tile">
          <h3>{carName}</h3>
          <span>

          </span>
        </div>
        <p>{category}</p>
      </div>

      <div className="car__img-center">
        <img src={imgUrl} alt="" />
      </div>

      <div className="car__item-bottom">
        <div className="car__item-left">
          <p>
            {type}
          </p>
        </div>

        <p className="car__rent">R$ {rentPrice}/Diária</p>
      </div>
    </div>
  );
};

export default CarItem;
