
function Header({ userName }) {
  return (
    <header className="header">
      <a className="logo" href="/">Pizza Day</a>
      <form>
        <input placeholder="Search for the order #" />
      </form>
      {userName && <div className="user-name">Hello, {userName}!</div>}
    </header>
  );
}

export default Header;