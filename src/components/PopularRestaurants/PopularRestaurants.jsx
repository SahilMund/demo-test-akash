import { RestaurantCard } from '../micro-components';
import styles from './PopularRestaurants.module.css';

export default function PopularRestaurants() {
  const restaurants = [
    { id: 1, name: "McDonald's London", logo: '/images/restaurants/mcd.svg' },
    { id: 2, name: 'Papa Johns', logo: '/images/restaurants/pj.svg' },
    { id: 3, name: 'KFC West London', logo: '/images/restaurants/kfc.svg' },
    { id: 4, name: 'Texas Chicken', logo: '/images/restaurants/texas.svg' },
    { id: 5, name: 'Burger King', logo: '/images/restaurants/bk.svg' },
    { id: 6, name: 'Shaurma 1', logo: '/images/restaurants/n1.svg' }
  ];

  return (
    <section className={styles.restaurants}>
      <div className={styles.container}>
        <h2 className={styles.title}>Popular Restaurants</h2>
        <div className={styles.grid}>
          {restaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
}