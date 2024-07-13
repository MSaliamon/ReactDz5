import MenuItem from '../MenuItem/MenuItem';

const MenuList = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuList;