import { Link } from 'react-router-dom';
function Header({ userName }) {
  return (
    <header className="header">
      <a className="logo" href="/">Pizza Day</a>
      <form>
        <input placeholder="Search for the order #" />
      </form>
      {userName && <div className="user-name">{userName}</div>}
      <Link to="/cart" className="cart-link">Cart</Link>
    </header>
  );
}
export default Header;