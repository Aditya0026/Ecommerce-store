import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

export const LoginPage = () => (
  <main className="section-outer grid-center auth-section">
    <form action="#" className="form form-signin">
      <div className="m-bottom-small flex-jc-center">
        <h3 className="m-bottom-small">Login</h3>
      </div>
      <div className="form-group">
        <input
          id="email"
          name="email"
          type="email"
          className="form-input"
          placeholder="Email Address"
          // onChange={inputUpdate}
          required
        />
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
      </div>
      <div className="form-group">
        <input
          name="password"
          id="password"
          type="password"
          className="form-input"
          placeholder="Password"
          minLength="4"
          required
        />
        <label htmlFor="password" className="form-label">
          Password
        </label>
      </div>
      <div className="form-group">
        <div className="form-radio-group flex-nav-wrap">
          <input
            id="large"
            type="checkbox"
            className="form-radio-input"
            name="size"
          />
          <label htmlFor="large" className="form-radio-label">
            <span
              className="form-radio-button"
              style={{ marginTop: '-0.1rem' }}
            />
            Remember Me
          </label>
          <a href="" style={{ fontSize: '1.3rem' }}>
            Forgot Password?
          </a>
        </div>
      </div>

      <div className="form-group">
        <button
          type="submit"
          className="btn btn-squared btn-outline-secondary w-100 spacing-medium weight-600"
        >
          Login
        </button>
        <button type="button" className="btn">
          Guest Login
        </button>
      </div>
      <div className="form-footer form-group flex">
        <p className="">
          <span style={{ fontSize: '1.6rem' }}>
            <i className="fa fa-regular fa-face-frown" />
          </span>
          Don't have an account ?
          <Link
            style={{ color: '#088178', fontSize: '1.5rem' }}
            to="/signup"
            id="form-signin-link"
            href="#"
            className="link form-footer-link"
          >
            Create one
          </Link>
        </p>
      </div>
    </form>
  </main>
);
