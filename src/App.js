import './App.css';
import React, { useState } from 'react';
import AddVegetable from './components/AddVegetable/AddVegetable';
import VegetableList from './components/VegetableList/VegetableList';

function App() {
  const [vegetables, setVegetables] = useState([]);
  const [totalVegetables, setTotalVegetables] = useState(0);

  const handleAddVegetable = (name, price, quantity) => {
    const newVegetable = { name, price, quantity };
    setVegetables([...vegetables, newVegetable]);
    setTotalVegetables(totalVegetables + 1);
  };

  const handleBuy = (name, quantityToBuy) => {
    const updatedVegetables = vegetables.map((veg) =>
      veg.name === name ? { ...veg, quantity: veg.quantity - quantityToBuy } : veg
    );
    setVegetables(updatedVegetables);
  };

  const handleDelete = (name) => {
    const updatedVegetables = vegetables.filter((veg) => veg.name !== name);
    setVegetables(updatedVegetables);
    setTotalVegetables(totalVegetables - 1);
  };

  return (
    <div>
      <h1>Veg Shop</h1>
      <AddVegetable onAdd={handleAddVegetable} />
      <h2>Total Vegetables: {totalVegetables}</h2>
      <VegetableList vegetables={vegetables} onBuy={handleBuy} onDelete={handleDelete} />
    </div>
  );
}

export default App;
