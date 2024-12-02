import React ,{useState} from 'react'
import { Header,Footer,OrderDetails,PopularRestaurants } from '../components/index.component'

const CheckOutPage = ({selectedAddress,handleShowPayment,handleRouteToAddress}) => {
    
  
  return (
    <>
        <Header/>
        <OrderDetails
          selectedAddress={selectedAddress}
          onSelectAddress={handleRouteToAddress}
          onShowPayment={handleShowPayment}
        />
        <PopularRestaurants/>
        <Footer/>
    </>
  )
}

export default CheckOutPage