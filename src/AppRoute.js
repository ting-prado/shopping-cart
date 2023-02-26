import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ShoppingPage from './components/ShoppingPage';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/shop" element={<ShoppingPage />} />
    </Routes>
  );
};

export default AppRoute;
