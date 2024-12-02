import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import 'leaflet/dist/leaflet.css';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import PaymentPage from './pages/PaymentPage'
import ProductPage from './pages/ProductPage';
import AddressPage from './pages/AddressPage';
import CheckOutPage from './pages/CheckOutPage';
import PropTypes from 'prop-types';

function App() {
  const [showPayment, setShowPayment] = useState(false);
  const [showAddressList, setShowAddressList] = useState(false);
  const [total, setTotal] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState({});

  return (
    <BrowserRouter>
      <Routing 
        showPayment={showPayment}
        setShowPayment={setShowPayment}
        showAddressList={showAddressList}
        setShowAddressList={setShowAddressList}
        total={total}
        setTotal={setTotal}
        selectedAddress={selectedAddress}
        setSelectedAddress={setSelectedAddress}
      />
    </BrowserRouter>
  
  )
}

function Routing({ 
  showPayment, 
  setShowPayment,
  showAddressList,
  setShowAddressList,
  total,
  setTotal,
  selectedAddress,
  setSelectedAddress 
}) {
  const navigate = useNavigate();

  const handleShowPayment = (amount) => {
    setTotal(amount);
    setShowPayment(true);

    navigate('/payment');
  };



  const handleBack = () => {
    navigate('/product');
  };

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
    setShowAddressList(false);
  };

  const handleRouteToAddress = () => {
    navigate('/address');
  };

  // if(showPayment){
  //  return <PaymentMethod total={total} onBack={handleBack} />
  // }

  return (
    <div className="app">
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckOutPage 
          selectedAddress={selectedAddress}
          handleShowPayment={handleShowPayment}
          handleRouteToAddress={handleRouteToAddress}/>} />
        <Route path="/payment" element={<PaymentPage 
          total={total}
          handleBack={handleBack}/>} />
        <Route path="/address" element={<AddressPage 
          selectedAddress={selectedAddress}
          handleSelectAddress={handleSelectAddress}
          handleBack={handleBack}/>} />
        </Routes>
    </div>
  )
}

Routing.propTypes = {
  showPayment: PropTypes.bool.isRequired,
  setShowPayment: PropTypes.func.isRequired,
  showAddressList: PropTypes.bool.isRequired,
  setShowAddressList: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  setTotal: PropTypes.func.isRequired,
  selectedAddress: PropTypes.object.isRequired,
  setSelectedAddress: PropTypes.func.isRequired
};

export default App
