import PropTypes from 'prop-types';
import { ArrowLeft } from 'lucide-react';
import styles from './AddressList.module.css';
import { useState } from 'react';
import { AddressModal } from '../AddressModal/AddressModal';
import { SvgPlus } from '../../assets';
import apiCall from '../../utils/API';


export default function AddressList({ addresses, selectedAddress, onSelectAddress, onBack,setAddressDetails }) {
  const [showModal, setShowModal] = useState(false);
  const [addressToEdit, setAddressToEdit] = useState(null);

  const handleSaveAddress = async (newAddress) => {
    if (addressToEdit) {
      // Update existing address
      // setAddressDetails(addresses.map(addr => 
      //   addr.id === addressToEdit.id 
      //     ? { ...newAddress, id: addressToEdit.id, name: addressToEdit.name }
      //     : addr
      // ));
      
      const response = await apiCall(
      import.meta.env.VITE_BACKEND_BASE_URL+'/api/address/edit',
      "POST",
      {Authorization:localStorage.getItem('token')},
      newAddress)
      if(response==0){
        navigate('/login')
      }
      window.location.reload()
      setAddressToEdit(null);
    } else {
      // Add new address
      console.log("elseeeeee",newAddress);
      
      const address = {
        ...newAddress,
        id: Math.random().toString(36).substring(2, 9),
        name: addresses[0].name
      };
      const response = await apiCall(
        import.meta.env.VITE_BACKEND_BASE_URL+'/api/address/create',
        "POST",
        {Authorization:localStorage.getItem('token')},
        newAddress)
        if(response==0){
          navigate('/login')
        }
      window.location.reload()
      setAddressDetails([...addresses, address]);
      onSelectAddress(address);
    }
    setShowModal(false);
    setAddressToEdit(null);
    
  };

  const handleDeleteAddress = async (addressId)=>{
    const response = await apiCall(
      import.meta.env.VITE_BACKEND_BASE_URL+'/api/address/delete',
      "POST",
      {Authorization:localStorage.getItem('token')},
      {id:addressId})
    if(response==0){
      navigate('/login')
    }
    window.location.reload()
  }

  const handleEditAddress = async (e,address)=>{
    e.stopPropagation();
    setAddressToEdit(address);
    setShowModal(true)
  }

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

        {addresses && addresses?.map(address => (
          <div
            key={address.addressId}
            className={`${styles.addressCard} ${
              selectedAddress.addressId === address.addressId ? styles.selected : ''
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
             <span> {address.fullAddress},{address.pincode},{address.city}{address.state}</span>
              <br />
              <span>Phone: {address.phone}</span>
            </div>
            <div className={styles.addressActions}>
                <button className={styles.actionButton} onClick={(e)=>handleEditAddress(e,address)}>Edit</button> 
                <div className={styles.divider}>|</div>
                <button className={styles.actionButton} onClick={()=>handleDeleteAddress(address.addressId)}>Remove</button>
              </div>
          </div>
        ))}
      </div>

      <AddressModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
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
  onBack: PropTypes.func.isRequired
};