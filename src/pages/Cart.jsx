import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/CartSlice';
import CartItem from '../components/CartItem/CartItem';
const Cart = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };
  const handleIncrementQuantity = (id) => {
    dispatch(incrementQuantity(id));
  };
  const handleDecrementQuantity = (id) => {
    dispatch(decrementQuantity(id));
  };
  return (
    <div>
      <Link to="/" className="back-to-menu">Back to Menu</Link>
      <h1>Your Cart</h1>
      <ul>
        {cart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={handleRemoveItem}
            onIncrement={handleIncrementQuantity}
            onDecrement={handleDecrementQuantity}
          />
        ))}
      </ul>
    </div>
  );
};
export default Cart;