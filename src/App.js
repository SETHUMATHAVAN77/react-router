import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayouts from "./components/SharedLayouts";
import SingleProduct from "./components/SingleProduct";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";

import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayouts />}>
          <Route path="Home" element={<Home />}></Route>
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />}></Route>
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route
            path="DashBoard"
            element={
              <ProtectedRoute user={user}>
                <DashBoard user={user} />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="products" element={<Products />} />
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

export default App;

// SPA- single page Application

// react router help us to display single page application work like a multi page  application by the help of react virtual DOM

//BrowserRouter-

// Routes-

// Route-

// path- what u want ex:url

// element - where u want

// links - connects one page to other page

// 404 - page

// nested pages(sub pages) - help us to creating shared layouts

// outlets- children component to render

// shared Layouts

// we having multible routes to create multi page effect in react

// we can have a shared layout like nave bar or side bar
// we can use url params to create a product pages

// we can create a protected routes
