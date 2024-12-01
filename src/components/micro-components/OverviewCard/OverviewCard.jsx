// components/Card/Card.jsx
import styles from './OverviewCard.module.css';

export default function RestaurantCard({ image, discount, type, name, buttonText, onClick }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      {discount && (
        <div className={styles.discount}>-{discount}%</div>
      )}
      <div className={styles.content}>
        <span className={styles.type}>{type}</span>
        <h3 className={styles.name}>{name}</h3>
        {buttonText && (
          <button onClick={onClick} className={styles.button}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}