import { useDispatch } from 'react-redux';
import { addItem } from '../../../redux/CartSlice';
function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const handleAddClick = () => {
    dispatch(addItem(pizza));
  };
  return (
    <li className="pizza">
      <img src={pizza.imageUrl} alt={pizza.name} className="pizza__image" />
      <div className="pizza__info">
        <p className="pizza__name">{pizza.name}</p>
        <p className="pizza__ingredients">{pizza.ingredients.join(', ')}</p>
        <div className="pizza__actions">
          <p className="pizza__price">€{pizza.unitPrice.toFixed(2)}</p>
          <button className="button" onClick={handleAddClick}>Add to Cart</button>
        </div>
      </div>
    </li>
  );
}
export default MenuItem;