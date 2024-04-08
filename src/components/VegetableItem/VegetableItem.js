import React, { useState } from 'react';

const VegetableItem = (props) => {
  const [quantityToBuy, setQuantityToBuy] = useState(0);

  const handleBuyClick = () => {
    props.onBuy(props.veg.name, quantityToBuy);
    setQuantityToBuy(0);
  };

  return (
    <div>
      <span>{props.veg.name} - ${props.veg.price} - Quantity: {props.veg.quantity}</span>
      <input type="number" value={quantityToBuy} onChange={(e) => setQuantityToBuy(parseInt(e.target.value))} />
      <button onClick={handleBuyClick}>Buy</button>
      <button onClick={() => props.onDelete(props.veg.name)}>Delete</button>
    </div>
  );
}

export default VegetableItem;
