import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {Login} from "./DigiKala/Login";
import {LoginTemplate} from "./DigiKala/Templates/LoginTemplate";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Signup} from "./DigiKala/Signup";
import {Home} from "./DigiKala/Home";
import {NotFound} from "./DigiKala/NotFound";
import {SiteTemplate} from "./DigiKala/Templates/SiteTemplate";
import {NewProduct} from "./DigiKala/NewProduct";
import {ProductList} from "./DigiKala/ProductList";
import UserProducts from "./DigiKala/UserProducts";
import Awesome from "./DigiKala/Awesome";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <BrowserRouter>
     <Routes>
        <Route path="/" element={
           <SiteTemplate>
              <Awesome />
              <UserProducts />
           </SiteTemplate>
        } />
        <Route path="/login" element={
           <LoginTemplate>
              <Login/>
           </LoginTemplate>
        } />
        <Route path="/signup" element={
           <LoginTemplate>
              <Signup />
           </LoginTemplate>
        } />
        <Route path="/register" element={
           <LoginTemplate>
              <Signup />
           </LoginTemplate>
        } />

        <Route path="/admin/products/new" element={
           <SiteTemplate>
              <NewProduct />
           </SiteTemplate>
        } />

        <Route path="/admin/products/update/:id?" element={
           <SiteTemplate>
              <NewProduct />
           </SiteTemplate>
        } />

        <Route path="/admin/products/list" element={
           <SiteTemplate>
              <ProductList />
           </SiteTemplate>
        } />

        <Route path="/products" element={
           <SiteTemplate>
              <UserProducts />
           </SiteTemplate>
        } />

        <Route path="*" element={
           <LoginTemplate>
              <NotFound />
           </LoginTemplate>
        } />

     </Routes>
  </BrowserRouter>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
