import React from 'react';
import styles from './ContactDetails.module.css'; 
import constants from '../../utils/constants';

const ContactDetails = () => {
  return (
    <div className={styles.deliveryInfoContainer}>
      <div className={styles.deliveryInfoSection}>
        <h3 className={styles.sectionTitle}>
          <img src={constants.DELIVERY_INFO.icon} alt="" />
          {constants.DELIVERY_INFO.title}
        </h3>
        <ul>
          {constants.DELIVERY_INFO.details.map((detail, index) => (
            <li key={index}>
              {detail.day}: {detail.hours}
            </li>
          ))}
        </ul>
        <p className={styles.deliveryTime}>
          Estimated time until delivery: {constants.DELIVERY_INFO.estimatedDeliveryTime}
        </p>
      </div>

      <div className={styles.contactInfoSection}>
        <div className={styles.sectionTitle}>
          <img src={constants.CONTACT_INFO.icon} alt="" />
          {constants.CONTACT_INFO.title}
        </div>
        <p>
          If you have allergies or other dietary restrictions, please contact the
          restaurant. The restaurant will provide food-specific information upon
          request.
        </p>
        <ul>
          {constants.CONTACT_INFO.details.map((detail, index) => (
            <div key={index}>
              <li className={styles.detailLabel}>
                <strong>{detail.label}:</strong>
              </li>
              <p className={styles.detailValue}>{detail.value}</p>
            </div>
          ))}
        </ul>
      </div>

      <div className={styles.operationalTimesSection}>
        <h3 className={styles.sectionTitle}>
          <img src={constants.OPERATIONAL_TIMES.icon} alt="" />
          {constants.OPERATIONAL_TIMES.title}
        </h3>
        <ul>
          {constants.OPERATIONAL_TIMES.details.map((detail, index) => (
            <li key={index}>
              {detail.day}: {detail.hours}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;