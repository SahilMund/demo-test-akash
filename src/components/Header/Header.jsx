import  { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import styles from './Header.module.css';
import constants from '../../utils/constants';

export default function Header({setShowCart ,totalCartItems}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate =useNavigate()
  const handleProfile=()=>{
    navigate('/profile')
  }
  
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.promo}>
          <span>⭐ Get 5% Off your first order.</span>
          <span className={styles.promoCode}>PROMO: ORDER5</span>
        </div>
        <div className={styles.location}>
          <span>Regent Street, A4, A420l, London</span>
          <button className={styles.changeLocation}>Change Location</button>
        </div>
        <div className={styles.cart} onClick={()=>setShowCart((prev)=>!prev)}>
          <span className={styles.cartIcon}>🛒</span>
          <span>My Cart</span>
          <span className={styles.cartCount}>{totalCartItems}</span>
        </div>
      </div>

      <nav className={styles.nav}>
        <div className={styles.logo}><img src={constants.APP_LOGO} alt="app-logo" /></div>
        
        <div className={styles.desktopMenu}>
          <Link href="#" className={`${styles.menuItem} ${styles.active}`} to='/home'>Home</Link>
          <a href="#" className={styles.menuItem}>Browse Menu</a>
          <a href="#" className={styles.menuItem}>Special Offers</a>
          <a href="#" className={styles.menuItem}>Restaurants</a>
          <a href="#" className={styles.menuItem}>Track Order</a>
        </div>

        <div className={styles.loginBtn} onClick={handleProfile}>
          <img src="https://img.icons8.com/?size=100&id=E2LI0GQ7_ToC&format=png&color=000000" alt="user-icon" />
          {localStorage.getItem('userName')}
        </div>

        <button 
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#">Home</a>
          <a href="#">Browse Menu</a>
          <a href="#">Special Offers</a>
          <a href="#">Restaurants</a>
          <a href="#">Track Order</a>
          <button className={styles.mobileLoginBtn}>Login/Signup</button>
        </div>
      )}
    </header>
  );
}

