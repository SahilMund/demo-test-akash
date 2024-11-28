import PropTypes from 'prop-types';
import { ArrowLeft } from 'lucide-react';
import styles from './OrderDetails.module.css';
import { AddressSelection } from '../AddressSelection/AddressSelection';

export function OrderDetails({ selectedAddress, onSelectAddress, onShowPayment }) {
  const orderItems = [
    {
      id: 1,
      name: 'Royal Cheese Burger',
      price: 100,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Potato Veggies',
      price: 70,
      image: 'https://images.unsplash.com/photo-1593282153762-a41e3ccf68b1?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Coca-Cola Cola',
      price: 40,
      image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  const deliveryFee = 30;
  const total = subtotal + deliveryFee;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <ArrowLeft size={20} />
        Your Order Details
      </h1>
      
      <div className={styles.orderGrid}>
        <div className={styles.orderItems}>
          <AddressSelection
            selectedAddress={selectedAddress}
            onSelectAddress={onSelectAddress}
          />
          {orderItems.map(item => (
            <div key={item.id} className={styles.item}>
              <img src={item.image} alt={item.name} className={styles.itemImage} />
              <div className={styles.itemDetails}>
                <h3>{item.name}</h3>
                <p className={styles.itemPrice}>₹{item.price}</p>
              </div>
            </div>
          ))}
          <div className={styles.notes}>
            <textarea placeholder="Add notes for your order..." />
          </div>
        </div>
        
        <div className={styles.summary}>
          <h2>Order Summary</h2>
          <div className={styles.summaryRow}>
            <span>Subtotal ({orderItems.length} items)</span>
            <span>₹{subtotal}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Delivery Fee</span>
            <span>₹{deliveryFee}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Total</span>
            <span>₹{total}</span>
          </div>
          <button 
            className={styles.checkoutButton}
            onClick={() => onShowPayment(total)}
          >
            Choose Payment Method
          </button>
        </div>
      </div>
    </div>
  );
}

OrderDetails.propTypes = {
  selectedAddress: PropTypes.object,
  onSelectAddress: PropTypes.func.isRequired,
  onShowPayment: PropTypes.func.isRequired
};