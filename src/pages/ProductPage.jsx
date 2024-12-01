import React, { useState } from 'react'
import {Header,McDonaldBanner,ContactDetails,Map,Reviews,PopularRestaurants,Footer,Deals,Catagories,OrderSummary} from '../components/index.component'

const ProductPage = () => {

  const [cartItems, setCartItems] = useState([]);

  const data = [
    {
      id:1,
      title: 'Royal Cheese Burger with extra Fries',
      price: 120,
      imageUrl: 'https://thesaltedpotato.com/wp-content/uploads/2022/04/twice-fried-fries.jpg',
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolor? Autem deleniti debitis dolores maiores et atque ullam "
    },
    {
      id:2,
      title: 'The classics for 3',
      price: 70,
      imageUrl: 'https://thesaltedpotato.com/wp-content/uploads/2022/04/twice-fried-fries.jpg',
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolor? Autem deleniti debitis dolores maiores et atque ullam "
    },
    {
        id:3,
        title: 'Royal Cheese Burger with medium Fries',
        price: 100,
        imageUrl: 'https://thesaltedpotato.com/wp-content/uploads/2022/04/twice-fried-fries.jpg',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolor? Autem deleniti debitis dolores maiores et atque ullam "
      },
      {
        id:4,
        title: 'The classics for 4',
        price: 50,
        imageUrl: 'https://thesaltedpotato.com/wp-content/uploads/2022/04/twice-fried-fries.jpg',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolor? Autem deleniti debitis dolores maiores et atque ullam "
      }
        
  ];

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
        {/* need to manage by state */}
        {cartItems && cartItems?.length > 0 && <OrderSummary
            items={cartItems}
            onRemove={handleRemoveFromCart}
            increaseQuantity={handleIncreaseQuantity}
            discounts={"-₹6.33"}
            deliveryFee={"₹6.33"}
            total={total}/>}
        <Deals/>
        <Catagories data={data} handleAddToCart={handleAddToCart}/>
        <Catagories data={data} handleAddToCart={handleAddToCart}/>
        <Catagories data={data} handleAddToCart={handleAddToCart}/>
        <ContactDetails/>
        <Map/>
        <Reviews/>
        <PopularRestaurants/>
        <Footer/>
    </>
  )
}

export default ProductPage