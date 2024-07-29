import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderById, updateOrderPriority } from '../redux/OrderSlice';
import '../OrderDetails.css';
const OrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order.order);
  const error = useSelector((state) => state.order.error);
  useEffect(() => {
    dispatch(fetchOrderById(id));
  }, [dispatch, id]);
  const handleAddPriority = async () => {
    const resultAction = await dispatch(updateOrderPriority(id));
    if (updateOrderPriority.fulfilled.match(resultAction)) {
      console.log('Priority updated successfully');
    } else {
      console.error('Failed to update priority:', resultAction.payload);
    }
  };
  if (error) {
    return <div>{error}</div>;
  }
  if (!order) {
    return <div>Loading...</div>;
  }
  const totalPrice = order.cart.reduce((total, item) => total + item.totalPrice, 0);
  const totalWithPriority = order.priority ? totalPrice + order.priorityPrice : totalPrice;

  return (
    <div className="order-details">
      <h2>Order Details</h2>
      <p>
        <strong>Order: {order.customer}</strong>
        {order.priority && <span className="priority">Priority</span>}
        <span className="status">{order.status}</span>
      </p>
      <p>Estimated Delivery: {new Date(order.estimatedDelivery).toLocaleString()}</p>
      <ul>
        {order.cart.map((item) => (
          <li key={item.pizzaId}>
            {item.quantity}x {item.name} - €{item.totalPrice.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Priority Price: €{order.priorityPrice.toFixed(2)}</p>
      <p>Order Price: €{totalPrice.toFixed(2)}</p>
      <p>Total Price: €{totalWithPriority.toFixed(2)}</p>
      {!order.priority && (
        <button onClick={handleAddPriority} className="button">
          Add Priority
        </button>
      )}
    </div>
  );
};
export default OrderDetails;