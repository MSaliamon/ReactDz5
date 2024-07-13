import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Header title="Shop" />
      <Login />
      <Menu />
    </div>
  );
}

export default App;