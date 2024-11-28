import React from 'react';
import '../styles/PaymentModal.css';

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
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Payment Method</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              defaultValue={cardData.cardNumber}
              placeholder="XXXX XXXX XXXX XXXX"
            />
          </div>

          <div className="form-group">
            <label>Expiration</label>
            <input
              type="text"
              name="expiration"
              defaultValue={cardData.expiration}
              placeholder="MM/YY"
            />
          </div>

          <div className="form-group">
            <label>CVC</label>
            <input
              type="text"
              name="cvc"
              defaultValue={cardData.cvc}
              placeholder="XXX"
            />
          </div>

          <div className="form-group">
            <label>Name on Card</label>
            <input
              type="text"
              name="nameOnCard"
              defaultValue={cardData.nameOnCard}
              placeholder="Name on Card"
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="remove-button" onClick={onRemove}>
              Remove
            </button>
            <div className="right-buttons">
              <button type="button" className="cancel-button" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="save-button">
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