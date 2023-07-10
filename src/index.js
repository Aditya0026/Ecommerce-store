import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { createRoot } from 'react-dom/client';
import App from './App';
import { makeServer } from './server';
import { ProductsContextProvider } from './store/Context/ProductContext';
import { CartContextProvider } from './store/Context/CartContext';
import { AuthContextProvider } from './store/Context/AuthContext';
import { WishlistContextProvider } from './store/Context/WishlistContext';
// Call make Server
makeServer();
const queryClient = new QueryClient();
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProductsContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <AuthContextProvider>
              <App />
            </AuthContextProvider>
          </WishlistContextProvider>
        </CartContextProvider>
      </ProductsContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
