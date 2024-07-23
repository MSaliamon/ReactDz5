const CartItem = ({ item, onRemove, onIncrement, onDecrement }) => {
    return (
      <li>
        {item.quantity}x {item.name} €{(item.unitPrice * item.quantity).toFixed(2)}
        <button onClick={() => onDecrement(item)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onIncrement(item)}>+</button>
        <button onClick={() => onRemove(item.id)}>Delete</button>
      </li>
    );
  };
  export default CartItem;