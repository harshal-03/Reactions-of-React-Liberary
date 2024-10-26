import './App.css';
import Item from './components/Item';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Item name="MacBook" price={100000}/>
      <Item name="Pendrive" price={500}/>
      <Item name="Mobile" price={30000}/>
      <Cart />
    </div>
  );
}

export default App;
