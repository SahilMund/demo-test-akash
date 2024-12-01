import styles from './RestaurantList.module.css';

const restaurants = [
  { id: 1, name: "McDonald's London", logo: "https://images.unsplash.com/photo-1587653915937-21f3ad3d0ccf?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Papa John's", logo: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "KFC West London", logo: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Texas Chicken", logo: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80" },
  { id: 5, name: "Burger King", logo: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80" },
  { id: 6, name: "Shaurma 1", logo: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=80" }
];

export default function RestaurantList() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Similar Restaurants</h2>
      <div className={styles.grid}>
        {restaurants.map(restaurant => (
          <div key={restaurant.id} className={styles.restaurant}>
            <img 
              src={restaurant.logo} 
              alt={restaurant.name} 
              className={styles.logo}
            />
            <p className={styles.name}>{restaurant.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}