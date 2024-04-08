import React, { useState } from 'react';

const  AddVegetable = (props) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddClick = () => {
    if (!name || !price || !quantity) return;
    props.onAdd(name, parseFloat(price), parseInt(quantity));
    setName('');
    setPrice('');
    setQuantity('');
  };

  return (
    <div>
      <input type="text" placeholder="Vegetable Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <button onClick={handleAddClick}>Add Vegetable</button>
    </div>
  );
}

export default AddVegetable;
