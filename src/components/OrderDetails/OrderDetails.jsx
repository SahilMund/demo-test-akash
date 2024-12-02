import PropTypes from 'prop-types';
import { ArrowLeft } from 'lucide-react';
import styles from './OrderDetails.module.css';
import { AddressSelection } from '../AddressSelection/AddressSelection';
import { useLocation, useNavigate } from 'react-router-dom';

export default function OrderDetails({ selectedAddress, onSelectAddress }) {

  const { state } = useLocation();
  const { items: orderItems, discounts, deliveryFee, total: orderTotal } = state;

  

const handleProceedToPayment = () => {
  navigate('/payment', {
    state: {
      orderItems,
      orderTotal
    }
  });
};

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
              <img src='https://s3-alpha-sig.figma.com/img/ca3a/b3ae/1b1b7d6918511dd054dcb4dbfa4c7cf7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jm6IjjoKt~xUGMyYFkWurl6htLa9eaUwDLQ7aiKdaTkU7CZ6ORSiGtAcCyYJUwdREOJAupilhWhD4LvsoHGT0jrm6WWd4G41bAaK1rg~RurjAS9S0Q8-GE7kbNRhZ~SdD~8aURDgwul5Gl77eTXEWdCrVxK8-7-0Ev8vr6v3mtHvXPtDc7JOUCYdX2XFLcS~nbhY8i0dYfmUNdSSpvPpka6qPgIr~dY9dByRMRnJgNnNMgInebs64iYFiqKt~a3N~b7iNg8i2fHTxV9kZF43vfT17vZzzKCaCVqr07peD4jdj5fNG1~Us2aAmULGEnOgLnRba5VSAg4V-wItK-qBZA__' alt={item.name} className={styles.itemImage} />
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
            onClick={ handleProceedToPayment}
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