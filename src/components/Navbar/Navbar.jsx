import React from 'react';
import './Navbar.css';
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../store/Context/CartContext';
import { Cart } from '../Cart/Cart';

export const Navbar = () => {
  const { cart, setCart, toggleCartModal, setToggleCartModal } =
    useCartContext();
  const [toggleSearchModal, setToggleSearchModal] = React.useState(false);

  return (
    <>
      <section className="header">
        <Link to="home">
          <h2>Shopify</h2>
        </Link>

        <div className="nav-right">
          <ul className="navbar">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Link to="/wishlist" className="flex">
            <AiOutlineHeart className="icon-link" />
          </Link>
          <button
            aria-label="cart-icon"
            type="submit"
            className="flex btn_1"
            onClick={() => {
              setToggleCartModal(!toggleCartModal);
            }}
          >
            <AiOutlineShoppingCart className="icon-link" />
          </button>
          <Link to="/login" className="flex">
            <AiOutlineUser className="icon-link" />
          </Link>
        </div>
      </section>
      <Cart
        toggleCartModal={toggleCartModal}
        setToggleCartModal={setToggleCartModal}
      />
    </>
  );
};
