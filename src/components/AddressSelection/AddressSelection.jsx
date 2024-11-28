import { MapPin, ChevronRight } from 'lucide-react';
import styles from './AddressSelection.module.css';
import PropTypes from 'prop-types';

export function AddressSelection({ selectedAddress, onSelectAddress }) {
  return (
    <div className={styles.addressSection} onClick={onSelectAddress}>
      <div className={styles.addressHeader}>
        <div className={styles.addressTitle}>
          <MapPin size={18} />
          Delivery Address
          {selectedAddress.isDefault && <span className={styles.defaultTag}>Default</span>}
        </div>
        <ChevronRight size={18} color="#666" />
      </div>
      <div className={styles.selectedAddress}>
        {selectedAddress.address}
      </div>
    </div>
  );
}

AddressSelection.propTypes = {
  selectedAddress: PropTypes.object.isRequired,
  onSelectAddress: PropTypes.func.isRequired
};