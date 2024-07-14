import MenuList from './MenuList/MenuList';

function Menu({ pizzas }) {
  return (
    <div className="menu">
      <MenuList pizzas={pizzas} />
    </div>
  );
}

export default Menu;
