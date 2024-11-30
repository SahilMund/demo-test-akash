import PropTypes from 'prop-types';
import styles from './AddressList.module.css';
import { useState } from 'react';
import { AddressModal } from '../AddressModal/AddressModal';
import { SvgArrowLeft, SvgLine, SvgPlus } from '../../assets';
import { useNavigate } from 'react-router-dom';


export function AddressList({ addresses, selectedAddress, onSelectAddress, onBack, setAddresses }) {
  const [showModal, setShowModal] = useState(false);
  const [addressToEdit, setAddressToEdit] = useState(null);

  const navigate = useNavigate();


  const handleSaveAddress = (newAddress) => {
    if (addressToEdit) {
      // Update existing address
      setAddresses(addresses.map(addr => 
        addr.id === addressToEdit.id 
          ? { ...newAddress, id: addressToEdit.id, name: addressToEdit.name }
          : addr
      ));
      setAddressToEdit(null);
    } else {
      // Add new address
      const address = {
        ...newAddress,
        id: Math.random().toString(36).substring(2, 9),
        name: addresses[0].name
      };
      setAddresses([...addresses, address]);
      onSelectAddress(address);
    }
    setShowModal(false);
    setAddressToEdit(null);
    
  };

  const handleRemoveAddress = (e, id) => {
    e.stopPropagation();
    setAddresses(addresses.filter(address => address.id !== id));
  };


  const handleEditAddress = (e, address) => {
    e.stopPropagation();
    console.log('address', address);
    setAddressToEdit(address);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setAddressToEdit(null);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title} onClick={onBack}>
        <img src={SvgArrowLeft} alt="arrow-left" />
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
            onClick={() => {
              onSelectAddress(address);
              navigate('/checkout');
            }}
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
                <button className={styles.actionButton} onClick={(e) => handleEditAddress(e, address)}>Edit</button> 
                <img src={SvgLine} alt="line" />                
                <button className={styles.actionButton} onClick={(e) => handleRemoveAddress(e, address.id)}>Remove</button>
              </div>
          </div>
        ))}
      </div>

      <AddressModal
        isOpen={showModal}
        onClose={handleCloseModal}
        onSave={handleSaveAddress}
        addressToEdit={addressToEdit}
      />
    </div>
  );
}

AddressList.propTypes = {
  addresses: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedAddress: PropTypes.object.isRequired,
  onSelectAddress: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  setAddresses: PropTypes.func.isRequired
};