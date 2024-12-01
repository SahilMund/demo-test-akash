import PropTypes from 'prop-types';
import { ArrowLeft } from 'lucide-react';
import styles from './OrderDetails.module.css';
import { AddressSelection } from '../AddressSelection/AddressSelection';
import { useLocation, useNavigate } from 'react-router-dom';

export default function OrderDetails({ selectedAddress, onSelectAddress, onShowPayment }) {

  const { state } = useLocation();
  const { items: orderItems, discounts, deliveryFee, total: orderTotal } = state;

  const salesTax = 10;
  const total = orderTotal + salesTax;
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title} onClick={()=>navigate(-1)}>
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
                  <h3 className={styles.itemName}>{item.title}</h3>
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
            <span>₹{orderTotal}</span>
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