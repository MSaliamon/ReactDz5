import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
  const { id } = useParams();
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

  if (error) {
    return <div>{error}</div>;
  }

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Order Details</h2>
      <p>Customer: {order.customer}</p>
      <p>Estimated Delivery: {order.estimatedDelivery}</p>
      <p>Order Price: {order.orderPrice}</p>
      <p>Priority: {order.priority ? 'Yes' : 'No'}</p>
      <p>Priority Price: {order.priorityPrice}</p>
      <p>Status: {order.status}</p>
      <ul>
        {order.cart.map((item) => (
          <li key={item.pizzaId}>
            {item.quantity}x {item.name} - €{item.totalPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetails;