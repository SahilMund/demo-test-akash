import { ArrowLeft, Plus, Wallet, CreditCard } from 'lucide-react';
import styles from './PaymentMethod.module.css';
import { useState } from 'react';
import { OrderSuccess } from '../OrderSuccess/OrderSuccess';
import PropTypes from 'prop-types';


export function PaymentMethod({ total, onBack }) {
  const [selectedMethod, setSelectedMethod] = useState('wallet');
  const [showSuccess, setShowSuccess] = useState(false);

  const paymentMethods = [
    {
      id: 'wallet',
      name: 'Wallet',
      description: 'Available balance: ₹150',
      icon: <Wallet size={20} />
    },
    {
      id: 'mastercard',
      name: 'MasterCard',
      description: '**** **** **** 4589',
      icon: <CreditCard size={20} />
    },
    {
      id: 'paypal',
      name: 'PayPal',
      description: 'Connect your PayPal account',
      icon: <CreditCard size={20} />
    },
    {
      id: 'stripe',
      name: 'Stripe',
      description: 'Pay with your card via Stripe',
      icon: <CreditCard size={20} />
    }
  ];

  const orderItems = [
    { name: 'Royal Cheese Burger' },
    { name: 'Potato Veggies' },
    { name: 'Coke Coca Cola' }
  ];

  if (showSuccess) {
    return <OrderSuccess items={orderItems} onBackToHome={() => window.location.href = '/'} />;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title} onClick={onBack}>
        <ArrowLeft size={20} />
        Choose and Pay
      </h1>
      
      <div className={styles.paymentGrid}>
        <div className={styles.methods}>
          {paymentMethods.map(method => (
            <div
              key={method.id}
              className={`${styles.method} ${selectedMethod === method.id ? styles.selected : ''}`}
              onClick={() => setSelectedMethod(method.id)}
            >
              <div className={styles.methodIcon}>
                {method.icon}
              </div>
              <div className={styles.methodDetails}>
                <h3 className={styles.methodName}>{method.name}</h3>
                <p className={styles.methodDescription}>{method.description}</p>
              </div>
              <div className={styles.radio} />
            </div>
          ))}
          
          <button className={styles.addCard}>
            <Plus size={20} />
            Add Debit Card
          </button>
        </div>
        
        <div className={styles.summary}>
          <div className={styles.amount}>
            <div className={styles.amountLabel}>Amount to be payed</div>
            <div className={styles.amountValue}>₹{total}</div>
          </div>
          <button 
            className={styles.payButton}
            onClick={() => setShowSuccess(true)}
          >
            Proceed Payment
          </button>
        </div>
      </div>
    </div>
  );
}

PaymentMethod.propTypes = {
  total: PropTypes.number.isRequired,
  onBack: PropTypes.func.isRequired
};