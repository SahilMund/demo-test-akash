import React from 'react'
import '../styles/ContactDetails.css'

const ContactDetails = () => {
  const deliveryInfo = {
    title: 'Delivery Information',
    icon: 'https://img.icons8.com/?size=100&id=68Lvfc60zzLV&format=png&color=000000',
    details: [
      { day: 'Monday', hours: '12:00 AM - 3:00 AM, 8:00 AM - 3:00 AM' },
      { day: 'Tuesday', hours: '8:00 AM - 3:00 AM' },
      { day: 'Wednesday', hours: '8:00 AM - 3:00 AM' },
      { day: 'Thusday', hours: '8:00 AM - 3:00 AM' },
      { day: 'Friday', hours: '8:00 AM - 3:00 AM' },
      { day: 'Saturday', hours: '8:00 AM - 3:00 AM' },
      { day: 'Sunday', hours: '8:00 AM - 12:00 AM' },
    ],
    estimatedDeliveryTime: '20 min',
  };

  const contactInfo = {
    title: 'Contact Information',
    icon: 'https://img.icons8.com/?size=100&id=MgbEPOv1uEpL&format=png&color=000000',
    details: [
      { label: 'Phone number', value: '+934443-43' },
      { label: 'Website', value: 'http://mcdonalds.uk/' },
    ],
  };

  const operationalTimes = {
    title: 'Operational Times',
    icon: 'https://img.icons8.com/?size=100&id=26040&format=png&color=FFFFFF',
    details: [
      { day: 'Monday', hours: '8:00 AM - 3:00 AM' },
      { day: 'Tuesday', hours: '8:00 AM - 3:00 AM' },
      { day: 'Wednesday', hours: '8:00 AM - 3:00 AM' },
      { day: 'Thusday', hours: '8:00 AM - 3:00 AM' },
      { day: 'Friday', hours: '8:00 AM - 3:00 AM' },
      { day: 'Saturday', hours: '8:00 AM - 3:00 AM' },
      { day: 'Sunday', hours: '8:00 AM - 3:00 AM' }
    ],
  };

  return (
    <div className="delivery-info-container">
      <div className="delivery-info-section">
        <h3 className="section-title">
          <img src={deliveryInfo.icon} alt="" /> {deliveryInfo.title}
        </h3>
        <ul>
          {deliveryInfo.details.map((detail, index) => (
            <li key={index}>
              {detail.day}: {detail.hours}
            </li>
          ))}
        </ul>
        <p>Estimated time until delivery: {deliveryInfo.estimatedDeliveryTime}</p>
      </div>

      <div className="contact-info-section">
        <div className="section-title">
        <img src={contactInfo.icon} alt="" /> {contactInfo.title}
        </div>
        <p>If you have allergies or other dietary <br />
          restrictions, please contact the restaurant. The <br />
          restaurant Will provide food-specific <br />
          information upon request.</p>
        <ul>
          {contactInfo.details.map((detail, index) => (
            <div>
              <li key={index}>
                <strong>{detail.label}:</strong> 
              </li>
              <p>{detail.value}</p>
            </div>
          ))}
        </ul>
      </div>

      <div className="operational-times-section">
        <h3 className="section-title">
        <img src={operationalTimes.icon} alt="" /> {operationalTimes.title}
        </h3>
        <ul>
          {operationalTimes.details.map((detail, index) => (
            <li key={index}>
              {detail.day}: {detail.hours}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContactDetails