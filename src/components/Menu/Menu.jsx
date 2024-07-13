import MenuList from './MenuList/MenuList';

const Menu = () => {
  const items = [
    { id: 1, name: 'Item 1', description: 'Description 1', price: '$10' },
    { id: 2, name: 'Item 2', description: 'Description 2', price: '$20' },
    { id: 3, name: 'Item 3', description: 'Description 3', price: '$30' },
  ];

  return (
    <div>
      <MenuList items={items} />
    </div>
  );
};


export default Menu;