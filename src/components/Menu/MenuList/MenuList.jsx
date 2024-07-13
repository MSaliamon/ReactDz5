import MenuItem from '../MenuItem/MenuItem';

const MenuList = ({ pizzas }) => {
  return (
    <ul>
      {pizzas.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
};

export default MenuList;