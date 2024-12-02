import  { useEffect, useState } from 'react'
import {Header,McDonaldBanner,ContactDetails,Map,Reviews,PopularRestaurants,Footer,Deals,Catagories,OrderSummary} from '../components/index.component'
import apiCall from '../utils/API'
import styles from '../pageStyles/ProductPage.module.css'
import Loader from '../components/Loader/Loader' 

const ProductPage = () => {
  const [productDetails,setProductDetails] = useState('')
  const [ showCart ,setShowCart ]= useState(false)
  const [isLoading,setIsLoading] = useState(true)
  const getProductDetails = async ()=>{
    const resopnse = await apiCall(
      import.meta.env.VITE_BACKEND_BASE_URL+'/api/all/productPage',
      "GET",
      {Authorization:localStorage.getItem('token')},
    )
    setProductDetails(resopnse)
    setIsLoading(false)
  }
  
  useEffect(()=>{
    getProductDetails()
  },[])

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const isExist = cartItems.filter((element)=>element.productId===item.productId)
    if (isExist && isExist.length>0) {
      return handleIncreaseQuantity(item)
    }
    setCartItems([...cartItems, {
      ...item,
      quantity: 1
    }]);
  };

  const handleIncreaseQuantity = (item) => {
    setCartItems(cartItems.map((cartItem) => cartItem.productId === item.productId ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem));
  };

  const handleRemoveFromCart = (item) => {
    if (item.quantity<=1) {
      return setCartItems(cartItems.filter((cartItem) => cartItem.productId !== item.productId));
    }
    setCartItems(cartItems.map((cartItem) => cartItem.productId === item.productId ? {...cartItem, quantity: cartItem.quantity -1} : cartItem));
  };

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if(isLoading)return <Loader/>
  return (
    <>
        <Header setShowCart={setShowCart} totalCartItems={cartItems?.length ?? 0}/>
        <McDonaldBanner/>
        <div className={styles.orderContainer}>
          <div className={styles.order}>
            <Deals/>
            <Catagories data={productDetails?.result?.burgerProductList} handleAddToCart={handleAddToCart}/>
            <Catagories data={productDetails?.result?.friesProductList} handleAddToCart={handleAddToCart}/>
            <Catagories data={productDetails?.result?.coldDrinkProductList} handleAddToCart={handleAddToCart}/>
          </div>
          <div className={styles.cart}>
              {((cartItems && cartItems?.length > 0) || showCart) && <OrderSummary
              items={cartItems}
              onRemove={handleRemoveFromCart}
              increaseQuantity={handleIncreaseQuantity}
              discounts={"-₹6.33"}
              deliveryFee={"₹6.33"}
              total={total}/>}
          </div>
        </div>
        <ContactDetails/>
        <Map/>
        <Reviews/>
        <PopularRestaurants/>
        <Footer/>
    </>
  )
}

export default ProductPage