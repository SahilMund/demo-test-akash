import { MapPin } from 'lucide-react';
import styles from './AddressModal.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const states = [
  'Andhra Pradesh',
  'Karnataka',
  'Kerala',
  'Maharashtra',
  'Tamil Nadu',
  'Telangana',
  // Add more states as needed
];

AddressModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export function AddressModal({ isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    state: '',
    city: '',
    pinCode: '',
    phone: '',
    address: '',
    isDefault: false
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      name: formData.name,
      address: `${formData.address}, ${formData.city}, ${formData.state} - ${formData.pinCode}`,
      phone: formData.phone,
      isDefault: formData.isDefault
    });
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <MapPin className={styles.locationIcon} size={24} />
          <h2 className={styles.modalTitle}>Add Address</h2>
        </div>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <select
              className={`${styles.input} ${styles.select}`}
              value={formData.state}
              onChange={e => setFormData(prev => ({ ...prev, state: e.target.value }))}
              required
            >
              <option value="">State</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>

            <input
              type="text"
              className={styles.input}
              placeholder="City/District"
              value={formData.city}
              onChange={e => setFormData(prev => ({ ...prev, city: e.target.value }))}
              required
            />
          </div>

          <div className={styles.formRow}>
            <input
              type="text"
              className={styles.input}
              placeholder="Pin Code"
              value={formData.pinCode}
              onChange={e => setFormData(prev => ({ ...prev, pinCode: e.target.value }))}
              required
            />

            <input
              type="tel"
              className={styles.input}
              placeholder="Phone Number"
              value={formData.phone}
              onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              required
            />
          </div>

          <textarea
            className={styles.textarea}
            placeholder="Enter full address"
            value={formData.address}
            onChange={e => setFormData(prev => ({ ...prev, address: e.target.value }))}
            required
          />

          <button type="submit" className={styles.submitButton}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}