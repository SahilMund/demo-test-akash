import PropTypes from 'prop-types';
import styles from './OrderSuccess.module.css';
import { SvgCheckCircle } from '../../assets';

export default function OrderSuccess({ items, onBackToHome }) {
  return (
    <div className={styles.container}>
      <div className={styles.successIcon}>
        <img src={SvgCheckCircle} alt="check" />
      </div>

      <h1 className={styles.title}>Order Placed Successfully</h1>
      <p className={styles.subtitle}>
        Your order is confirmed and on its way. Get set to savor your chosen delights!
      </p>

      <div className={styles.orderItems}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            {item.name}
          </div>
        ))}
          <button className={styles.homeButton} onClick={onBackToHome}>
        Back to Home
      </button>
      </div>

    
    </div>
  );
}

OrderSuccess.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired,
  onBackToHome: PropTypes.func.isRequired
};