import styles from './AddressModal.module.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SvgLocation } from '../../assets';
import apiCall from '../../utils/API'


AddressModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export function AddressModal({ isOpen, onClose, onSave,addressToEdit }) {
  const [formData, setFormData] = useState({
    state: '',
    city: '',
    pincode: '',
    phone: '',
    fullAddress: '',
    addressId:''
  });


  useEffect(() => {
    console.log('addressToEdit', addressToEdit);
    if (addressToEdit) {
      // Parse the address string to get individual fields
      // const [address, cityState, pinCode] = addressToEdit.address.split(', ');
      // const [city, state] = cityState.split(', ');

      setFormData({
        state: addressToEdit?.state ?? 'Kerala',
        city: addressToEdit?.city,
        pincode: addressToEdit?.pincode,
        phone: addressToEdit.phone,
        fullAddress: addressToEdit?.fullAddress,
        addressId:addressToEdit.addressId,
        isDefault: addressToEdit?.isDefault || false
      });
    }
  }, [addressToEdit]);

  if (!isOpen) return null;

  const handleSubmit = async(e) => {
    e.preventDefault();
    onSave(formData);

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
            <input
              name="state"
              className={styles.input}
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              className={styles.input}
              placeholder="City/District"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className={styles.input}
              placeholder="Pin Code"
              name="pincode"
              value={formData.pincode}
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
            name="fullAddress"  
            value={formData.fullAddress}
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