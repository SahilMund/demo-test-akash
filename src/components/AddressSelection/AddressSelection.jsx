import { arrowRight } from '../../assets';
import styles from './AddressSelection.module.css';
import PropTypes from 'prop-types';

export function AddressSelection({ selectedAddress, onSelectAddress }) {
  return (
    <div className={styles.addressSection} onClick={onSelectAddress}>
      <div className={styles.addressHeader}>
        <div className={styles.addressTitle}>
          <div className={styles.locationIcon}>
          <img src="https://img.icons8.com/?size=30&id=85353&format=png&color=FC8A06" alt="location" />
          </div>

          <div>
          Delivery Address
          <div className={styles.selectedAddress}>
        {selectedAddress.address}
      </div>
          </div>
    
        
        </div>
        <img src={arrowRight} alt="arrowRight" />

      </div>
      
    </div>
  );
}

AddressSelection.propTypes = {
  selectedAddress: PropTypes.object.isRequired,
  onSelectAddress: PropTypes.func.isRequired
};