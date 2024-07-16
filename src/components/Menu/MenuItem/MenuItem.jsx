import React, { useState } from 'react';


function MenuItem({ pizza }) {
  const [quantity, setQuantity] = useState(0);

  const handleAddClick = () => {
    setQuantity(1);
  };

  const handleIncrementClick = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrementClick = () => {
    setQuantity(prevQuantity => Math.max(0, prevQuantity - 1));
  };

  const handleDeleteClick = () => {
    setQuantity(0);
  };

  return (
    <li className="pizza">
      <img src={pizza.imageUrl} alt={pizza.name} className="pizza__image" />
      <div className="pizza__info">
        <p className="pizza__name">{pizza.name}</p>
        <p className="pizza__ingredients">{pizza.ingredients.join(', ')}</p>
        <div className="pizza__actions">
          <p className="pizza__price">€{pizza.unitPrice}</p>
          {quantity === 0 ? (
            <button className="button" onClick={handleAddClick}>Add to Cart</button>
          ) : (
            <div>
              <button className="button" onClick={handleIncrementClick}>+</button>
              <span className="quantity">{quantity}</span>
              <button className="button" onClick={handleDecrementClick}>-</button>
              <button className="button" onClick={handleDeleteClick}>Delete</button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;