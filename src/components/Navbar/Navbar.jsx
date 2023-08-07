import React, { useState } from 'react';
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from 'react-icons/ai';
import { BsCartDash, BsPerson } from 'react-icons/bs';
import { Squash as Hamburger } from 'hamburger-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from '../../store/Context/CartContext';
import { Cart } from '../Cart/Cart';
import { useWishlistContext } from '../../store/Context/WishlistContext';
import { Sidebar } from '../Sidebar/Sidebar';
import { logOutUser, useAuthContext } from '../../store/Context/AuthContext';

export const Navbar = () => {
  const { login, setUser, setLogin, user } = useAuthContext();
  const { cart, setCart, toggleCartModal, setToggleCartModal } =
    useCartContext();
  const [wishlist, setWishlist] = useWishlistContext();
  const [showSidebar, setShowSidebar] = React.useState(false);
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="header">
        <div className="humburger-menu">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            type="submit"
            id="btnHamburger"
            href="#"
            aria-label="menu-icon"
            className={`nav-toggle hide-for-desktop ${
              showSidebar ? 'open' : ''
            }`}
          >
            <Hamburger size={25} toggle={setOpen} />
          </button>
          <Link to="/">
            <h2 className="logo">Apex</h2>
          </Link>
        </div>
        <div className="nav-right">
          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
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
            {wishlist?.length ? (
              <span className="nav-link-span wishlist-span">
                {wishlist?.length}
              </span>
            ) : null}
          </Link>
          <button
            aria-label="cart-icon"
            type="submit"
            className="flex btn_1"
            onClick={() => {
              setToggleCartModal(!toggleCartModal);
            }}
          >
            <BsCartDash className="icon-link" />
            {cart?.length ? (
              <span className="nav-link-span cart-span">{cart?.length}</span>
            ) : null}
          </button>
          {login ? (
            <button
              aria-label="logout-icon"
              type="button"
              onClick={() => {
                logOutUser(setUser, setCart, setWishlist, setLogin, navigate);
              }}
              className="flex-al-center border-none logout-btn"
            >
              LOG OUT
            </button>
          ) : (
            <Link
              aria-label="login-icon"
              to="/login"
              className="flex-al-center border-none"
            >
              <AiOutlineUser className="icon-link" />
            </Link>
          )}
        </div>
      </section>
      <Cart
        toggleCartModal={toggleCartModal}
        setToggleCartModal={setToggleCartModal}
      />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
};
