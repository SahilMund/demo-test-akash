import React from 'react'
import {Header,McDonaldBanner,ContactDetails,Map,Reviews,PopularRestaurants,Footer,Deals,Catagories,OrderSummary} from '../components/index.component'

const ProductPage = () => {
  const data = [
    {
      title: 'Royal Cheese Burger with extra Fries',
      price: '₹ 70',
      imageUrl: 'https://thesaltedpotato.com/wp-content/uploads/2022/04/twice-fried-fries.jpg',
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolor? Autem deleniti debitis dolores maiores et atque ullam "
    },
    {
      title: 'The classics for 3',
      price: '₹ 70',
      imageUrl: 'https://thesaltedpotato.com/wp-content/uploads/2022/04/twice-fried-fries.jpg',
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolor? Autem deleniti debitis dolores maiores et atque ullam "
    },
    {
        title: 'Royal Cheese Burger with extra Fries',
        price: '₹ 70',
        imageUrl: 'https://thesaltedpotato.com/wp-content/uploads/2022/04/twice-fried-fries.jpg',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolor? Autem deleniti debitis dolores maiores et atque ullam "
      },
      {
        title: 'The classics for 3',
        price: '₹ 70',
        imageUrl: 'https://thesaltedpotato.com/wp-content/uploads/2022/04/twice-fried-fries.jpg',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolor? Autem deleniti debitis dolores maiores et atque ullam "
      }
        
  ];

  const items = [
    { name: 'Royal Cheese Burger', price: '₹120' },
    { name: 'Potato Veggies', price: '₹70' },
    { name: 'Coke Coca Cola', price: '₹40' },
    { name: 'Royal Cheese Burger', price: '₹120' },
    { name: 'Potato Veggies', price: '₹70' },
    { name: 'Coke Coca Cola', price: '₹40' },
  ];

  return (
    <>
        <Header/>
        <McDonaldBanner/>
        {/* need to manage by state */}
        {/* <OrderSummary
            items={items}
            discounts={"-₹6.33"}
            deliveryFee={"₹6.33"}
            total={"₹230"}/> */}
        <Deals/>
        <Catagories data={data}/>
        <Catagories data={data}/>
        <Catagories data={data}/>
        <ContactDetails/>
        <Map/>
        <Reviews/>
        <PopularRestaurants/>
        <Footer/>
    </>
  )
}

export default ProductPage