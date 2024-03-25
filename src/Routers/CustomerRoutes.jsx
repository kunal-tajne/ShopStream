import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../customer/pages/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Navigation from "../customer/components/navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import HorizontalLinearStepper from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
      <Navigation/>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />}></Route>
        <Route path="/product/:productId/" element={<ProductDetails/>}></Route>

        {/* Horizontal Linear Stepper is name used for checkout function name didn't change it intially so used it to avoid any error into the file where it is used - kt */}
        <Route path="/checkout" element={<HorizontalLinearStepper/>}></Route> 

        <Route path="/account/order" element={<Order/>}></Route> 

        <Route path="/account/order/:orderId" element={<OrderDetails/>}></Route> 

      </Routes>

      <div><Footer/></div>
    </div>
  );
};

export default CustomerRoutes;
