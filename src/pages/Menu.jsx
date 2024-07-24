import  {  useEffect } from 'react';
import MenuList from '../components/Menu/MenuList/MenuList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '../redux/MenuSlice';
import { Link } from 'react-router-dom';
const Menu = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector(state => state.menu.pizzas);
  const status = useSelector(state => state.menu.status);
  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (status === 'failed') {
    return <div>Error fetching pizzas</div>;
  }
  return (
    <div className="menu">
      <h2>Menu</h2>
      <MenuList pizzas={pizzas} /> {/* використовуємо MenuList */}
      <Link to="/cart">
        <button className="button buy-button">Buy</button>
      </Link>
    </div>
  );
};
export default Menu;