import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useScrollToTop } from './CustomHooks/CustomHooks';
import { Navbar } from './components/Navbar/Navbar';
import { HomePage } from './pages/HomePage/HomePage';
import { Footer } from './components/Footer/Footer';
import { ShopPage } from './pages/ShopPage/ShopPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { useProductContext } from './store/Context/ProductContext';
import { SignUp } from './pages/SignUpPage/SignUp';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { Wishlist } from './pages/Wishlist/Wishlist';
import { SingleProduct } from './pages/SingleProduct/SingleProduct';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

function App() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <div className="App">
      <ToastContainer autoClose={1500} />

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/:productID" element={<SingleProduct />} />
          <Route path="/shop/:productID" element={<SingleProduct />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
