import styles from './RestaurantCard.module.css';

export default function RestaurantCard({ logo, name }) {
  return (
    <div className={styles.card}>
      <img src={logo} alt={name} className={styles.logo} />
      <h3 className={styles.name}>{name}</h3>
    </div>
  );
}