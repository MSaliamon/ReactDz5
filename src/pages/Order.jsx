import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input/Input';
const orderSchema = z.object({
  userName: z.string().min(1, 'User name is required'),
  phone: z.string().min(10, 'Phone number is required').regex(/^\d+$/, 'Phone number must contain only digits'),
  address: z.string().min(1, 'Address is required'),
  priority: z.boolean(),
});
const Order = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce((total, item) => total + item.quantity * item.unitPrice, 0);
  const navigate = useNavigate();
  const defaultValues = {
    userName: '',
    phone: '',
    address: '',
    priority: false,
  };
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues,
    resolver: zodResolver(orderSchema),
  });
  const onSubmit = async (data) => {
    const orderData = {
      address: data.address,
      customer: data.userName,
      phone: data.phone,
      priority: data.priority,
      position: "",
      cart: cartItems.map(item => ({
        name: item.name,
        pizzaId: item.id,
        quantity: item.quantity,
        totalPrice: item.quantity * item.unitPrice,
        unitPrice: item.unitPrice,
      })),
    };
    try {
      const response = await fetch('https://react-fast-pizza-api.onrender.com/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
      const result = await response.json();

      if (result.status === 'success') {
        navigate(`/order/${result.data.id}`);
      } else {
        console.error('Something went wrong');
      }
    } catch (error) {
      console.error('Something went wrong', error);
    }
  };
  return (
    <div className="order-form">
      <h2>Order Information</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            User Name:
            <Input
              type="text"
              placeholder="Your full name"
              {...register('userName')}
            />
            {errors.userName && <span className="error">{errors.userName.message}</span>}
          </label>
        </div>
        <div>
          <label>
            Phone:
            <Input
              type="text"
              placeholder="Your phone number"
              {...register('phone')}
            />
            {errors.phone && <span className="error">{errors.phone.message}</span>}
          </label>
        </div>
        <div>
          <label>
            Address:
            <Input
              type="text"
              placeholder="Your address"
              {...register('address')}
            />
            {errors.address && <span className="error">{errors.address.message}</span>}
          </label>
        </div>
        <div>
          <label>
            Priority:
            <Input
              type="checkbox"
              {...register('priority')}
            />
          </label>
        </div>
        <button type="submit">Order now for €{totalAmount.toFixed(2)}</button>
      </form>
    </div>
  );
};
export default Order;