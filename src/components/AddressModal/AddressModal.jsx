import styles from './AddressModal.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { SvgLocation } from '../../assets';

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
    state: '',
    city: '',
    pinCode: '',
    phone: '',
    address: '',
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

    console.log('formData', formData);
    onClose();
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
         <img src={SvgLocation} alt="location" />
          <h2 className={styles.modalTitle}>Add Address</h2>
        </div>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <select
              className={`${styles.input} ${styles.select}`}
              name="state"
              value={formData.state}
              onChange={handleChange}
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
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          {/* </div>

          <div className={styles.formRow}> */}
            <input
              type="text"
              className={styles.input}
              placeholder="Pin Code"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              className={styles.input}
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            className={styles.textarea}
            placeholder="Enter full address"
            name="address"  
            value={formData.address}
            onChange={handleChange}
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