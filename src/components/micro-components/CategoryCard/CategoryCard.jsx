import styles from './CategoryCard.module.css';

export default function CategoryCard({ image, name, count }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.count}>{count} Restaurants</div>
      </div>
    </div>
  );
}