import React, { useEffect, useState } from 'react'
import {Header,McDonaldBanner,ContactDetails,Map,Reviews,PopularRestaurants,Footer,Deals,Catagories,OrderSummary} from '../components/index.component'
import apiCall from '../utils/API'

const ProductPage = () => {
  const [productDetails,setProductDetails] = useState('')
  const getProductDetails = async ()=>{
    const resopnse = await apiCall(
      'http://localhost:8080/api/all/productPage',
      "GET",
      {Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFrYXNoMUBnbWFpbC5jb20iLCJ1c2VySWQiOjE3MzI5NTA4OTE1MDUsImlhdCI6MTczMjk1MDk1OX0.6dmZoF9MURjjUk2RgPvlp67wIzaGJ1MpIAMhiBNlzTk"},
    )
    setProductDetails(resopnse)
  }
  
  useEffect(()=>{
    getProductDetails()
  },[])

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, {
      ...item,
      quantity: 1
    }]);
  };

  const handleIncreaseQuantity = (item) => {
    setCartItems(cartItems.map((cartItem) => cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem));
  };

  const handleRemoveFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <>
        <Header/>
        <McDonaldBanner/>
        {cartItems && cartItems?.length > 0 && <OrderSummary
            items={cartItems}
            onRemove={handleRemoveFromCart}
            increaseQuantity={handleIncreaseQuantity}
            discounts={"-₹6.33"}
            deliveryFee={"₹6.33"}
            total={total}/>}
        <Deals/>
        <Catagories data={productDetails?.result?.burgerProductList} handleAddToCart={handleAddToCart}/>
        <Catagories data={productDetails?.result?.friesProductList} handleAddToCart={handleAddToCart}/>
        <Catagories data={productDetails?.result?.coldDrinkProductList} handleAddToCart={handleAddToCart}/>
        <ContactDetails/>
        <Map/>
        <Reviews/>
        <PopularRestaurants/>
        <Footer/>
    </>
  )
}

export default ProductPage