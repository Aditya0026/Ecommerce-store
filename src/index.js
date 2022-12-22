import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createRoot } from 'react-dom/client';
import App from './App';
import { makeServer } from './server';
import { ProductsContextProvider } from './Context/ProductContext';
// Call make Server
makeServer();
const queryClient = new QueryClient();
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
