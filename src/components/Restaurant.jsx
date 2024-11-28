import React from 'react'
import '../styles/Restaurant.css'
import constants from '../utils/constants'

const Restaurant = () => {
  return (
    <div className='restaurant-list'>
        <h2>Similar Restaurants</h2>
        <div className="restaurant-cards">
            {constants.RESTAURANT_DATA.map((restaurant)=>(
                <div className="restaurant-card" key={restaurant.name}>
                    <img src={restaurant.icon} className='restaurant-icon' alt={restaurant.name}/>
                    <p className='restaurant-name'>{restaurant.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Restaurant