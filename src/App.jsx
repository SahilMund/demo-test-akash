import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Catagory from './components/Catagory'
import ContactDetails from './components/ContactDetails'
import Footer from './components/Footer'
import LoginForm from './components/LoginForm'
import Profile from './components/Profile/Profile'
import RegisterForm from './components/RegisterForm'
import Restaurant from './components/Restaurant'
import { AddressList } from './components/AddressList/AddressList'
import { useState } from 'react'
import { OrderDetails } from './components/OrderDetails/OrderDetails'
import { PaymentMethod } from './components/PaymentMethod/PaymentMethod'
import PropTypes from 'prop-types';

function App() {

  const [total, setTotal] = useState(0);
  const [addresses] = useState([
    {
      id: '1',
      name: 'Mike Ross',
      address: '45, Green Street, Sector 12, New Delhi, 11001, India',
      phone: '9734537468',
      isDefault: true
    },
    {
      id: '2',
      name: 'Mike Ross',
      address: 'Office 704, Tower B, Techno Plaza, Bengaluru, Karnataka, 560100, India',
      phone: '9537447362'
    }
  ]);
  const [selectedAddress, setSelectedAddress] = useState(addresses[0]);

  return (
    <BrowserRouter>
      <Routing 
        total={total}
        setTotal={setTotal}
        addresses={addresses}
        selectedAddress={selectedAddress}
        setSelectedAddress={setSelectedAddress}
      />
    </BrowserRouter>
  //added comment to check
  )
}

function Routing({ 

  total,
  setTotal,
  addresses,
  selectedAddress,
  setSelectedAddress 
}) {
  const navigate = useNavigate();

  const handleShowPayment = (amount) => {
    setTotal(amount);

    navigate('/payment');
  };

  const handleBack = () => {
    navigate('/checkout');
  };

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
  };

  const handleRouteToAddress = () => {
    navigate('/address');
  };

  // const items = [
  //   { name: 'Royal Cheese Burger', price: '₹120' },
  //   { name: 'Potato Veggies', price: '₹70' },
  //   { name: 'Coke Coca Cola', price: '₹40' },
  // ];

  return (
    <div className="app">
      <Routes>
        {/* <Route path="/" element={
          <OrderSummary
            items={items}
            discounts={"-₹0.33"}
            deliveryFee={"₹0.33"}
            total={"₹230"}
          />
        } /> */}
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/contact" element={<ContactDetails />} />
        <Route path="/categories" element={<Catagory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<>
          <OrderDetails
          selectedAddress={selectedAddress}
          onSelectAddress={handleRouteToAddress}
          onShowPayment={handleShowPayment}
        />
        {/* TODO: Add RestaurantList from homepage */}
        </>} />
        <Route path="/payment" element={<PaymentMethod total={total} onBack={handleBack} />} />
        <Route path="/address" element={
          <AddressList
          addresses={addresses}
          selectedAddress={selectedAddress}
          onSelectAddress={handleSelectAddress}
          onBack={handleBack}
        />
        } />
      </Routes>
      <Footer />
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
  addresses: PropTypes.array.isRequired,
  selectedAddress: PropTypes.object.isRequired,
  setSelectedAddress: PropTypes.func.isRequired
};

export default App
