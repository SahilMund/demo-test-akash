import PropTypes from 'prop-types';
import { ArrowLeft } from 'lucide-react';
import styles from './AddressList.module.css';
import { useState } from 'react';
import { AddressModal } from '../AddressModal/AddressModal';
import { SvgPlus } from '../../assets';


export default function AddressList({ addresses, selectedAddress, onSelectAddress, onBack }) {
  const [showModal, setShowModal] = useState(false);

  const handleSaveAddress = (newAddress) => {
    // In a real app, this would make an API call
    const address = {
      ...newAddress,
      id: Math.random()?.toString(36)?.substr(2, 9)
    };
    // Add the new address to the list
    onSelectAddress(address);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title} onClick={onBack}>
        <ArrowLeft size={20} />
        Your Addresses
      </h1>


      <div className={styles.addressGrid}>
        <div className={styles.addCard} onClick={() => setShowModal(true)}>
          <div className={styles.addIcon}>
            <img src={SvgPlus} alt="plus" />
          </div>
          <div className={styles.addText}>Add Address</div>
        </div>

        {addresses?.map(address => (
          <div
            key={address.id}
            className={`${styles.addressCard} ${
              selectedAddress.id === address.id ? styles.selected : ''
            }`}
            onClick={() => onSelectAddress(address)}
          >
            <div className={styles.addressHeader}>
              <div className={styles.addressName}>
                {address.name}
                {address.isDefault && <span className={styles.defaultTag}>Default</span>}
              </div>
             
            </div>
            <div className={styles.addressDetails}>
             <span> {address.address}</span>
              <br />
              <span>Phone: {address.phone}</span>
            </div>
            <div className={styles.addressActions}>
                <button className={styles.actionButton}>Edit</button> 
                <div className={styles.divider}>|</div>
                <button className={styles.actionButton}>Remove</button>
              </div>
          </div>
        ))}
      </div>

      <AddressModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSaveAddress}
      />
    </div>
  );
}

AddressList.propTypes = {
  addresses: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedAddress: PropTypes.object.isRequired,
  onSelectAddress: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};