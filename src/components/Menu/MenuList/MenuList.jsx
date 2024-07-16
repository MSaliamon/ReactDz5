import MenuItem from '../MenuItem/MenuItem';
const MenuList = ({ pizzas }) => (
  <ul className="menu-list">
    {pizzas.map(pizza => (
      <MenuItem key={pizza.id} pizza={pizza} />
    ))}
  </ul>
);

export default MenuList;