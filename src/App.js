import { useEffect, useState } from 'react';
import TopNav from './components/TopNav';
import AppRoute from './AppRoute';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/tops?')
      .then((res) => res.json())
      .then(console.log);

    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return (
    <div className="App">
      <TopNav />
      <AppRoute />
    </div>
  );
};

export default App;
