import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
const Order = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce((total, item) => total + item.quantity * item.unitPrice, 0);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="order-form">
      <h2>Order Information</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            User Name:
            <input
              type="text"
              {...register('userName', { required: 'User name is required' })}
            />
            {errors.userName && <span className="error">{errors.userName.message}</span>}
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input
              type="text"
              {...register('phone', { required: 'Phone number is required' })}
            />
            {errors.phone && <span className="error">{errors.phone.message}</span>}
          </label>
        </div>
        <div>
          <label>
            Address:
            <input
              type="text"
              {...register('address', { required: 'Address is required' })}
            />
            {errors.address && <span className="error">{errors.address.message}</span>}
          </label>
        </div>
        <div>
          <label>
            What to yo give your order priority
            <input
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