import React, { useState } from 'react';
import '../styles/Profile.css';
import PaymentModal from './PaymentModal';

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

  const handleRemoveCard = () => {
    setPaymentCards(cards =>
      cards.filter(card => card.id !== selectedCard.id)
    );
    setIsModalOpen(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-header-left">
          <button className="back-button">←</button>
          <h2>My Profile</h2>
        </div>
        <button className="edit-button" onClick={handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>

      <div className="profile-content">
        <div className="profile-header-left">
          <img 
            src="https://via.placeholder.com/80" 
            alt="Profile" 
            className="profile-image" 
          />
          <h3>{userData.fullName}</h3>
        </div>

        <div className="profile-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={userData.fullName}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <input
              type="text"
              name="gender"
              value={userData.gender}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
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

        <div className="payment-methods">
          <h3>Saved Payment Methods</h3>
          <div className="payment-cards">
            {paymentCards.map(card => (
              <div key={card.id} className="card">
                <div>
                  <div>{card.cardNumber}</div>
                  <div>{card.nameOnCard}</div>
                </div>
                <button onClick={() => handleEditCard(card)}>✏️</button>
              </div>
            ))}
            <div className="add-card">
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