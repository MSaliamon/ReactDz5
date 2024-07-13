import Button from '../../Button/Button';

const MenuItem = ({ item }) => {
  const handleAddToCart = () => {
    console.log(`Added ${item.name} to cart`);
  };

  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <Button onClick={handleAddToCart}>ADD TO CART</Button>
    </div>
  );
};

export default MenuItem;