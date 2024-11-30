import PropTypes from 'prop-types';
import styles from './PaymentModal.module.css';

function PaymentModal({ isOpen, onClose, cardData, onSave, onRemove }) {

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedCard = {
      cardNumber: formData.get('cardNumber'),
      expiration: formData.get('expiration'),
      cvc: formData.get('cvc'),
      nameOnCard: formData.get('nameOnCard')
    };
    onSave(updatedCard);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Edit Payment Method</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              defaultValue={cardData.cardNumber}
              placeholder="XXXX XXXX XXXX XXXX"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Expiration</label>
            <input
              type="text"
              name="expiration"
              defaultValue={cardData.expiration}
              placeholder="MM/YY"
            />
          </div>

          <div className={styles.formGroup}>
            <label>CVC</label>
            <input
              type="text"
              name="cvc"
              defaultValue={cardData.cvc}
              placeholder="XXX"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Name on Card</label>
            <input
              type="text"
              name="nameOnCard"
              defaultValue={cardData.nameOnCard}
              placeholder="Name on Card"
            />
          </div>
          </div>

          <div className={styles.modalActions}>
            <button type="button" className={styles.removeButton} onClick={onRemove}>
              Remove
            </button>
            <div className={styles.rightButtons}>
              <button type="button" className={styles.cancelButton} onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className={styles.saveButton}>
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaymentModal;

PaymentModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    cardData: PropTypes.shape({
      cardNumber: PropTypes.string,
      expiration: PropTypes.string,
      cvc: PropTypes.string,
      nameOnCard: PropTypes.string
    }).isRequired,
    onSave: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
  };