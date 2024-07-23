import React, {  useEffect } from 'react';
import MenuList from '../components/Menu/MenuList/MenuList';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '../redux/CartSlice';
function Menu() {
  const dispatch = useDispatch();
  const pizzas = useSelector(state => state.menu.pizzas);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  return (
    <div className="menu">
      <h2>Menu</h2>
      <MenuList pizzas={pizzas} />
      <Link to="/cart">
        <button className="button buy-button">Buy</button>
      </Link>
    </div>
  );
}

export default Menu;