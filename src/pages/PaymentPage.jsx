import React, {useState} from 'react'
import {Footer,Header,PaymentMethod} from '../components/index.component'

const PaymentPage = ({total,handleBack}) => {
    
  return (
    <>
        <Header/>
        <PaymentMethod total={total} onBack={handleBack}/>
        <Footer/>
    </>
  )
}

export default PaymentPage