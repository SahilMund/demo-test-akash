import React from 'react';
import '../styles/Catagory.css';

const Catagory=()=> {
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
      },
      {
        title: 'Royal Cheese Burger with extra Fries',
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
      },
      {
        title: 'Royal Cheese Burger with extra Fries',
        price: '₹ 70',
        imageUrl: 'https://thesaltedpotato.com/wp-content/uploads/2022/04/twice-fried-fries.jpg',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolor? Autem deleniti debitis dolores maiores et atque ullam "
      },
      
      
  ];

  return (
    <div className="item-container">
      <h2>Fries</h2>
      <div className="item-flex">
        {data.map((item) => (
          <div className="item-card" key={item.title}>
            <div className="item-desc">
                <h4>{item.title}</h4>
                <p className='item-content'>{item.desc}</p>
                <p className='price'>{item.price}</p>
            </div>
            <div className="item-image">
                <img src={item.imageUrl} alt={item.title} />
                <div className="btn-shadow">
                    <button className="add-button">+</button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catagory;