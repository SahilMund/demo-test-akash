import { ArrowLeft } from 'lucide-react';
import styles from './PaymentMethod.module.css';
import { useState } from 'react';
import  OrderSuccess  from '../OrderSuccess/OrderSuccess';
import PropTypes from 'prop-types';
import { useLocation,useNavigate } from 'react-router-dom';
import { arrowRight, SvgMastercard, SvgPaypal, SvgPlusOutlined, SvgStripe, SvgWallet } from '../../assets';
import apiCall from '../../utils/API';


export default function PaymentMethod({ total, onBack }) {
  const [selectedMethod, setSelectedMethod] = useState('wallet');
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();
  const { state } = useLocation();
  const { orderItems ,orderTotal } = state;

  const formattedOrderItems = orderItems.map(item => ({
    productId: item.productId,
    quantity: item.quantity
  }));

  const handlePayment= async()=>{
    const payLoad={
      items:formattedOrderItems,
      totalAmount:orderTotal
    }
    const response = await apiCall(
      import.meta.env.VITE_BACKEND_BASE_URL+'/api/all/orderComplete',
      "POST",
      {Authorization:localStorage.getItem('token')},
      payLoad)
    
    if(response==0){
      navigate('/login')
    }
    if(response.orderId)setShowSuccess(true)
  }

  const paymentMethods = [
    {
      id: 'wallet',
      name: 'Wallet',
      description: 'Available balance: ₹15000',
      icon: SvgWallet,
      isRadio: false,
    },
    {
      id: 'mastercard',
      name: 'MasterCard',
      description: '',
      icon: SvgMastercard,
      isRadio: true,
    },
    {
      id: 'paypal',
      name: 'PayPal',
      description: '',
        icon: SvgPaypal,
      isRadio: true,
    },
    {
      id: 'stripe',
      name: 'Stripe',
      description: '',
      icon: SvgStripe,
      isRadio: true,
    },
    {
      id: 'debit',
      name: 'Add Debit Card',
      description: '',
      icon: SvgPlusOutlined,
      isRadio: false,
    }
  ];


  if (showSuccess) {
    return <OrderSuccess items={orderItems} onBackToHome={() => navigate('/home')} />;
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
               <img src={method.icon} alt={method.name} />
              </div>
              <div className={styles.methodDetails}>
                <h3 className={styles.methodName}>{method.name}</h3>
                { method.description && <p className={styles.methodDescription}>{method.description}</p> }
              </div>
              {method.isRadio ? <div className={styles.radio} /> : 
             <> { method.id !== 'debit' && <img src={arrowRight} alt="arrowRight" />}</>
              }
            </div>
          ))}
          
        
        </div>
        
        <div className={styles.summary}>
          <div className={styles.amount}>
            <div className={styles.amountLabel}>Amount to be payed</div>
            <div className={styles.amountValue}>₹{orderTotal}</div>
          </div>
          <div className={styles.divider} />
          <button 
            className={styles.payButton}
            onClick={handlePayment}
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