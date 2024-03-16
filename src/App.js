import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import { HomePage } from './customer/pages/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';

function App() {
  return (
    <div className="">
    <Navigation/>
    <div>
      {/* <HomePage/> */}
      <Product/>
    </div>

    <Footer></Footer>
    </div>
  );
}

export default App;
