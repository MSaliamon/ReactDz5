import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity } from '../redux/CartSlice';
const Cart = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };
  const handleIncrementQuantity = (id) => {
    const item = cart.find(item => item.id === id);
    dispatch(updateQuantity({ itemId: id, quantity: item.quantity + 1 }));
  };
  const handleDecrementQuantity = (id) => {
    const item = cart.find(item => item.id === id);
    dispatch(updateQuantity({ itemId: id, quantity: item.quantity - 1 }));
  };
  return (
    <div>
      <Link to="/" className="back-to-menu">Back to Menu</Link>
      <h1>Your Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.quantity}x {item.name} €{(item.unitPrice * item.quantity).toFixed(2)}
            <button onClick={() => handleDecrementQuantity(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncrementQuantity(item.id)}>+</button>
            <button onClick={() => handleRemoveItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cart;