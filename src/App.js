import React from 'react';
import logo from './logo.svg';
import Counter from './features/counter/Counter';
import './App.css';
import ProductList from './features/product-list/ProductList';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUp from './features/auth/components/SignUp';

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
