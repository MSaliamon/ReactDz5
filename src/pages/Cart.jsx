import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity } from '../redux/CartSlice';
import CartItem from '../components/CartItem/CartItem';
const Cart = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };
  const handleIncrementQuantity = (item) => {
    dispatch(updateQuantity({ itemId: item.id, quantity: item.quantity + 1 }));
  };
  const handleDecrementQuantity = (item) => {
    if (item.quantity === 1) {
      dispatch(removeFromCart(item.id));
    } else {
      dispatch(updateQuantity({ itemId: item.id, quantity: item.quantity - 1 }));
    }
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