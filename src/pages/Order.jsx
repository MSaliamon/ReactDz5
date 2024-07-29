import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input/Input';
import { useDispatch } from 'react-redux';
import { createOrder } from '../redux/OrderSlice';

const orderSchema = z.object({
  userName: z.string().min(1, 'User name is required'),
  phone: z.string().min(10, 'Phone number is required').regex(/^\d+$/, 'Phone number must contain only digits'),
  address: z.string().min(1, 'Address is required'),
  priority: z.boolean(),
});

const Order = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      userName: '',
      phone: '',
      address: '',
      priority: false,
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.items);

  const onSubmit = async (data) => {
    const orderData = {
      address: data.address,
      customer: data.userName,
      phone: data.phone,
      priority: data.priority,
      position: "",
      cart: cart.map(item => ({
        pizzaId: item.id,
        name: item.name,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        totalPrice: item.quantity * item.unitPrice,
      })),
    };

    const resultAction = await dispatch(createOrder(orderData));
    if (createOrder.fulfilled.match(resultAction)) {
      const orderId = resultAction.payload.id;
      navigate(`/order/${orderId}`);
    } else {
      console.error('Order creation failed:', resultAction.payload);
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
        <button type="submit">Order now for €{cart.reduce((total, item) => total + item.quantity * item.unitPrice, 0).toFixed(2)}</button>
      </form>
    </div>
  );
};

export default Order;