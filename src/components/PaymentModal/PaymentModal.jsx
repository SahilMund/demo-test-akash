import PropTypes from 'prop-types';
import styles from './PaymentModal.module.css';
import apiCall from '../../utils/API';

function PaymentModal({ isOpen, onClose, cardData, onSave, onRemove ,setIsModalOpen}) {

  if (!isOpen) return null;

  const handleCardSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedCard = {
      cardNumber: formData.get('cardNumber'),
      expireDate: formData.get('expireDate'),
      cvv: formData.get('cvv'),
      nameOnCard: formData.get('nameOnCard'),
      cardId:cardData.cardId
    };
    const response = await apiCall(
      import.meta.env.VITE_BACKEND_BASE_URL+'/api/card/create',
      "POST",
      {Authorization:localStorage.getItem('token')},
      updatedCard)
      
      if(response==0){
        navigate('/login')
      }
      window.location.reload()
    onSave(updatedCard);
    setIsModalOpen(false)
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Edit Payment Method</h2>
        <form onSubmit={handleCardSubmit}>
          <div className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              defaultValue={cardData.cardNumber}
              placeholder="XXXX XXXX XXXX XXXX"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Expiration</label>
            <input
              type="text"
              name="expireDate"
              defaultValue={cardData.expireDate}
              placeholder="MM/YY"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>CVC</label>
            <input
              type="text"
              name="cvv"
              defaultValue={cardData.cvv}
              placeholder="XXX"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Name on Card</label>
            <input
              type="text"
              name="nameOnCard"
              defaultValue={cardData.nameOnCard}
              placeholder="Name on Card"
              required
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