import  { useState } from 'react';
import styles from './Profile.module.css';
import PaymentModal from '../PaymentModal/PaymentModal';
import { SvgCard, SvgEdit } from '../../assets';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    fullName: 'Mike Ross',
    email: 'mikeross@gmail.com',
    gender: 'Male',
    country: 'India'
  });

  const [paymentCards, setPaymentCards] = useState([
    {
      id: 1,
      cardNumber: 'xxxx xxxx xxxx 1234',
      nameOnCard: 'Mike Ross',
      expiration: '11/26',
      cvc: '123'
    },
    {
      id: 2,
      cardNumber: 'xxxx xxxx xxxx 6789',
      nameOnCard: 'Mike Ross',
      expiration: '03/25',
      cvc: '456'
    },
    {
      id: 3,
      cardNumber: 'xxxx xxxx xxxx 3468',
      nameOnCard: 'Mike Ross',
      expiration: '07/24',
      cvc: '789'
    }
  ]);

  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditCard = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleSaveCard = (updatedCard) => {
    setPaymentCards(cards =>
      cards.map(card =>
        card.id === selectedCard.id
          ? { ...card, ...updatedCard }
          : card
      )
    );
    setIsModalOpen(false);
  };

  const handleAddNewCard = () => {
    setIsModalOpen(true);
  };

  const handleRemoveCard = () => {
    setPaymentCards(cards =>
      cards.filter(card => card.id !== selectedCard.id)
    );
    setIsModalOpen(false);
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <div className={styles.profileHeaderLeft}>
          <button className={styles.backButton}>←</button>
          <h2>My Profile</h2>
        </div>
        <button className={styles.editButton} onClick={handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>

      <div className={styles.profileContent}>
        <div className={styles.profileHeaderLeft}>
          <img 
            src="https://s3-alpha-sig.figma.com/img/5e4a/3170/267a651a652fb2ee7a3f288490b02114?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VWoveJIPjucn6UKqySe7E~9uvOVzwQG96RR1vxLOcMccgmLZtrf2q1bwINxGkAOjHkO7FgWj1i~0e6rjbfP3ShnAT8I7BVIcFvyq149BlNLrmgv6ABaN70IeDr1rLiGEvPsEugjThaRfNo366HiMJ9fE--BdlzvX0hnquvxqcyq8Umw217CF4ZV-QT17N36rO64aqZEY40Fym1rZrZSUbZp~PvrajdtDrerA-5GXYkMgwiD~V3EqJZzTrCEddvQ7nK17jeLsUXEYKP24jRXi-9eCHVFOAMief1XjWXDgr8BA3jQ2PnNyPJJ7NQ-RGwXmBcsYLXLYq1IaXkgM~vPGsQ__" 
            alt="Profile" 
            className={styles.profileImage} 
          />
          <h3>{userData.fullName}</h3>
        </div>

        <div className={styles.profileForm}>
          <div className={styles.formGroup}>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={userData.fullName}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Gender</label>
            <input
              type="text"
              name="gender"
              value={userData.gender}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={userData.country}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className={styles.paymentMethods}>
          <h3>Saved Payment Methods</h3>
          <div className={styles.paymentCards}>
            {paymentCards.map(card => (
              <div key={card.id} className={styles.card}>
                <img src={SvgCard} alt="Card" />
                <div >
                  <div className={styles.cardNumber}>{card.cardNumber}</div>
                  <div className={styles.cardName}>{card.nameOnCard}</div>
                </div>
                <div className={styles.editCard} 
                onClick={() => handleEditCard(card)}>
                  <img src={SvgEdit} alt="Edit" />
                </div>
              </div>
            ))}
            <div className={styles.addCard} onClick={handleAddNewCard}>
              + Add New Card
            </div>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cardData={selectedCard || {}}
        onSave={handleSaveCard}
        onRemove={handleRemoveCard}
      />
    </div>
  );
}

export default Profile;