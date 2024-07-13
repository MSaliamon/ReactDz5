import MenuList from './MenuList/MenuList';

const Menu = ({ pizzas }) => {
  return (
    <div className="menu">
      <h2>Menu</h2>
      <MenuList pizzas={pizzas} />
    </div>
  );
};

export default Menu;