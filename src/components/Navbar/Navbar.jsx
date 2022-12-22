import React from 'react';
import './Navbar.css';
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const Navbar = () => (
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
        <Link to="/" className="flex">
          <AiOutlineShoppingCart className="icon-link" />
        </Link>
        <Link to="/login" className="flex">
          <AiOutlineUser className="icon-link" />
        </Link>
      </div>
    </section>
  </>
);
