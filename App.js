import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AddProduct from './components/AddProduct';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import MpesaPayment from './components/MpesaPayment';

import GetProducts from './components/GetProducts';
import CompFive from './components/CompFive';
import CompFour from './components/CompFour';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs'
import CompOne from './components/CompOne';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <div className="App">
      

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/add_products" element={<AddProduct />} />
          <Route path="/getproducts" element={<GetProducts />} />
          <Route path="/mpesapayment" element={<MpesaPayment />} />
          <Route path="/comp_five" element={<CompFive  />} />
          <Route path="/comp_four" element={<CompFour />} />
          <Route path="/comp_one" element={<CompOne />} />
           <Route path="/homepage" element={<HomePage />} />
           <Route path="/aboutus" element={<AboutUs/>} />
           <Route path="/footer" element={<Footer/>} />
           <Route path="/navbar" element={<NavBar/>} />


       
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
