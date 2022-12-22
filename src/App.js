import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { HomePage } from './pages/HomePage/HomePage';
import { Footer } from './components/Footer/Footer';
import { ShopPage } from './pages/ShopPage/ShopPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { useProductContext } from './Context/ProductContext';
import { SignUp } from './pages/SignUpPage/SignUp';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { Wishlist } from './pages/Wishlist/Wishlist';
import { SingleProduct } from './pages/SingleProduct/SingleProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
