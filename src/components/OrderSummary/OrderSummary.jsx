import { useNavigate } from 'react-router-dom';
import styles from './OrderSummary.module.css';
import PropTypes from 'prop-types';

function OrderSummary  ({ items, discounts, deliveryFee, total, onRemove, increaseQuantity })  {

const navigate = useNavigate();
  const handleCheckout = () => {
    navigate('/checkout', {
      state: {
        items,
        discounts, 
        deliveryFee,
        total
      }
    });
  };

  return (
    <div>
        <div className={styles.share}>
            <img src="https://img.icons8.com/?size=100&id=8nzTB8GBZSIN&format=png&color=FFFFFF" alt="share" />
            Share this cart <br /> with your friends
            <button className={styles.copyButton}>Copy Link</button>
        </div>
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <img src="https://img.icons8.com/?size=100&id=M1H3qACX5y0J&format=png&color=FFFFFF" alt="" />
                <h2 className={styles.header}>My Basket</h2>
            </div>

            <div className={styles.itemsContainer}>
                {items.map((item, index) => (
                <div key={index} className={styles.item}>
                    <div className={styles.increment} onClick={()=>increaseQuantity(item)}>{item.quantity}X</div>
                    <div className={styles.itemDetails}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.itemPrice}>₹ {item.price}</span>
                    </div>
                    <button className={styles.removeButton}
                    onClick={()=>onRemove(item)}
                    ><img src="https://img.icons8.com/?size=100&id=7837&format=png&color=FA5252" alt="delete" /></button>
                </div>
                ))}
            </div>

            <div className={styles.summaryContainer}>
                <div className={styles.subtotalContainer}>
                <b>Sub Total:</b>
                <p>{total}</p>
                </div>
                <div className={styles.discountsContainer}>
                <b>Discounts:</b>
                <p>{discounts}</p>
                </div>
                <div className={styles.deliveryContainer}>
                <b>Delivery Fee:</b>
                <p>{deliveryFee}</p>
                </div>
                <div className={styles.totalContainer}>
                <b>Total to pay</b>
                <p>{total}</p>
                </div>
            </div>

            <div className={styles.actionsContainer}>
                <div className={styles.freeItemButton}>
                    Choose your free item
                    <img src="https://img.icons8.com/?size=100&id=Wpfk0R1JDfty&format=png&color=EBEBEB" alt="down-arrow" />
                </div>
                <div className={styles.coupon}>
                    Apply Coupon code here
                    <img src="https://img.icons8.com/?size=100&id=81136&format=png&color=000000" alt="right arrow" />
                </div>
                <div className={styles.deliveryInfo}>
                <div className={styles.deliveryTime}>
                    <img src="https://img.icons8.com/?size=100&id=9358&format=png&color=40C057" alt="delivery-scooty" />
                    <br /><b>Delivery</b> <br />Starts at 17:50
                    </div>
                <div className={styles.deliveryTime}>
                    <img src="https://img.icons8.com/?size=100&id=60579&format=png&color=40C057" alt="collection" />
                    <br /><b>Collection</b><br /> Starts at 16:50
                    </div>
                </div>
                <button className={styles.checkoutButton} onClick={handleCheckout}> 
                    <img src="https://img.icons8.com/?size=100&id=87725&format=png&color=FFFFFF" 
                    alt="check-out-btn" />Checkout!</button>
            </div>
        </div>
    </div>
  );
};

export default OrderSummary;

OrderSummary.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    })
  ).isRequired,
  discounts: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  deliveryFee: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onRemove: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired
};
