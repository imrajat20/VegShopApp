import React from 'react';
import VegetableItem from '../VegetableItem/VegetableItem';

const VegetableList = (props) =>  {
  return (
    <div>
      {props.vegetables.map((veg, index) => (
        <VegetableItem key={index} veg={veg} onBuy={props.onBuy} onDelete={props.onDelete} />
      ))}
    </div>
  );
}

export default VegetableList;
