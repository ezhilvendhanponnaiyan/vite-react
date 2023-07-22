import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { Root, ErrorPage, Products, SingleProducts, SignIn } from './routes';

// React Routers link

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// React Routers Add
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: 'products/:productId',
        element: <SingleProducts />,
      },
      {
        path: 'SignIn',
        element: <SignIn />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
