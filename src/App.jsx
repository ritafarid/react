import { Component } from "react";
import Cart from './component/Cart/Cart.jsx';
import Brands from './component/Brands/Brands.jsx';
import Categories from './component/Categories/Categories.jsx';
import Layout from "./component/Layout/Layout.jsx";
import Register from './component/Register/Register.jsx';
import Login from './component/Login/Login.jsx';
import Products from './component/Products/Products.jsx';
import Wishlist from './component/Wishlist/Wishlist.jsx';
import Home from './component/Home/Home.jsx'; 
import NotFound from './component/NotFound/NotFound.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export default function App(){
  let routers = createBrowserRouter([
    {path: '' , element :<Layout/> , children:[
      {index: true , element :<Register/>},
      {path: 'cart' , element :<Cart/>},
      {path: 'products' , element :<Products/>},
      {path: 'categories' , element :<Categories/>},
      {path: 'brands' , element :<Brands/>},
      {path: 'register' , element :<Register/>},
      {path: 'Login' , element :<Login/>},
      {path: '*' , element :<NotFound/>},
    ]}
  ])

  return <>
  <RouterProvider router={routers}></RouterProvider>
  </>
}