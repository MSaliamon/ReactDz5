import { useEffect, useState } from 'react';
import MenuList from './MenuList/MenuList';




function Menu() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('https://react-fast-pizza-api.onrender.com/api/menu');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPizzas(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div className="menu">
      <h2>Menu</h2>
      <MenuList pizzas={pizzas} />
    </div>
  );
}

export default Menu;