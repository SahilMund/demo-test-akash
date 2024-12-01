// components/Header/Header.jsx
import React, { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
        <div className={styles.cart}>
          <span className={styles.cartIcon}>🛒</span>
          <span>My Cart</span>
          <span className={styles.cartCount}>0</span>
        </div>
      </div>

      <nav className={styles.nav}>
        <div className={styles.logo}>Order.uk</div>
        
        <div className={styles.desktopMenu}>
          <a href="#" className={`${styles.menuItem} ${styles.active}`}>Home</a>
          <a href="#" className={styles.menuItem}>Browse Menu</a>
          <a href="#" className={styles.menuItem}>Special Offers</a>
          <a href="#" className={styles.menuItem}>Restaurants</a>
          <a href="#" className={styles.menuItem}>Track Order</a>
        </div>

        <button className={styles.loginBtn}>Login/Signup</button>

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

