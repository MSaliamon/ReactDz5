import MenuItem from '../MenuItem/MenuItem';

function MenuList({ pizzas }) {
  return (
    <ul>
      {pizzas.map(pizza => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export default MenuList;
