import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../OrderDetails.css';
const OrderDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchOrder = async () => {
        try {
          const response = await fetch(`https://react-fast-pizza-api.onrender.com/api/order/${id}`);
          const data = await response.json();
          if (data.status === 'success') {
            setOrder(data.data);
          } else {
            setError('Something went wrong');
          }
        } catch (error) {
          setError('Something went wrong');
        }
      };
      fetchOrder();
    }, [id]);
    const handleAddPriority = async () => {
      try {
        const response = await fetch(`https://react-fast-pizza-api.onrender.com/api/order/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ priority: true }),
        });
        const data = await response.json();
        console.log('Response data:', data);
        if (data.status === 'success') {
          setOrder(data.data);
        } else {
          setError('Failed to update priority');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('Failed to update priority');
      }
    };
    if (error) {
      return <div>{error}</div>;
    }
    if (!order) {
      return <div>Loading...</div>;
    }
    return (
      <div className="order-details">
        <h2>Order Details</h2>
        <p>
          <strong>Order: {order.customer}</strong>
          {order.priority && <span className="priority">Priority</span>}
          <span className="status">{order.status}</span>
        </p>
        <p>Estimated Delivery: {order.estimatedDelivery}</p>
        <ul>
          {order.cart.map((item) => (
            <li key={item.pizzaId}>
              {item.quantity}x {item.name} - €{item.totalPrice.toFixed(2)}
            </li>
          ))}
        </ul>
        {order.priority && <p>Priority Price: €{order.priorityPrice.toFixed(2)}</p>}
        <p>Order Price: €{(order.orderPrice + (order.priorityPrice || 0)).toFixed(2)}</p>
        {!order.priority && (
          <button onClick={handleAddPriority} className="button">
            Add Priority
          </button>
        )}
      </div>
    );
  };
  export default OrderDetails;