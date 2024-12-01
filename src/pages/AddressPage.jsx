import React ,{useState}from 'react'
import {Header,Footer,AddressList} from '../components/index.component'

const AddressPage = ({addresses,selectedAddress,handleSelectAddress,handleBack}) => {
    
  return (
    <>
        <Header/>
        <AddressList
          addresses={addresses}
          selectedAddress={selectedAddress}
          onSelectAddress={handleSelectAddress}
          onBack={handleBack}
        />
        <Footer/>
    </>
  )
}

export default AddressPage