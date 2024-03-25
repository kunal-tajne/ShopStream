import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/components/navigation/Navigation";
import { HomePage } from "./customer/pages/HomePage";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import DeliveryAddressForm from "./customer/components/Checkout/DeliveryAddressForm";
import OrderSummary from "./customer/components/Checkout/OrderSummary";
import Order from "./customer/components/Order/Order";
import OrderCard from "./customer/components/Order/OrderCard";
import OrderDetails from "./customer/components/Order/OrderDetails";

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* {<Checkout/>} */}
        {/* <Order/> */}
        <OrderDetails/>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
