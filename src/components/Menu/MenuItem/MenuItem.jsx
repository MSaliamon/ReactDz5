import Button from '../../Button/Button';

const MenuItem = ({ pizza }) => {
  return (
    <li className="pizza">
      <img src={pizza.imageUrl} alt={pizza.name} className="pizza__image" />
      <div className="pizza__info">
        <p className="pizza__name">{pizza.name}</p>
        <p className="pizza__ingredients">{pizza.ingredients.join(', ')}</p>
        <div className="pizza__actions">
          <p className="pizza__price">{pizza.soldOut ? 'Sold out' : `€${pizza.unitPrice}`}</p>
          {!pizza.soldOut && <Button onClick={() => console.log('ADD TO CART')}>Add to cart</Button>}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;