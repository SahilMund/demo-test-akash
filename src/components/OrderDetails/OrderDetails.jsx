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
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Potato Veggies',
      price: 70,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Coca-Cola Cola',
      price: 40,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const salesTax = 10;
  const total = subtotal + salesTax;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <ArrowLeft size={20} />
        Your Order Details
      </h1>
      
      <div className={styles.orderGrid}>
        <div className={styles.orderItems}>
          {orderItems.map(item => (
            <div key={item.id} className={styles.item}>
              <img src={item.image} alt={item.name} className={styles.itemImage} />
              <div className={styles.itemDetails}>
                <div>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <p className={styles.itemQuantity}>{item.quantity}x item</p>
                </div>
                  <p className={styles.itemPrice}>₹{item.price}</p>
              </div>
            </div>
          ))}
        
        <div className={styles.notesContainer}>
          <h4 className={styles.notesTitle}>Notes</h4>
        <div className={styles.notes}>
            <textarea rows={1}        
 placeholder="Add order notes"></textarea>
          </div>
        </div>
        </div>
        
        <div className={styles.summary}>
          <AddressSelection
            selectedAddress={selectedAddress}
            onSelectAddress={onSelectAddress}
          />
         <div className={styles.divider}></div>
       
          <div className={styles.summaryRow}>
            <span>Items</span>
            <span>₹{subtotal}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Sales Tax</span>
            <span>₹{salesTax}</span>
          </div>
          <div className={styles.divider}></div>

          <div className={styles.subtotal}>
            <span>Subtotal ({orderItems.length} items)</span>
            <h3 className={styles.subtotalAmount}>₹{total}</h3>
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