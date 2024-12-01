// components/Hero/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.subtitle}>Order Restaurant food, takeaway and groceries.</p>
        <h1 className={styles.title}>
          Feast Your Senses,
          <span className={styles.highlight}>Fast and Fresh</span>
        </h1>
        
        <div className={styles.search}>
          <input 
            type="text" 
            placeholder="e.g. EC4R 3TE"
            className={styles.input}
          />
          <button className={styles.searchBtn}>
            <span>Search</span>
            <span className={styles.arrow}>→</span>
          </button>
        </div>
      </div>

      <div className={styles.notifications}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>Order#1</div>
          <p>We've received your order!</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>Order#2</div>
          <p>Order Accepted! ✅</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>Order#3</div>
          <p>Your rider's nearby 🛵</p>
        </div>
      </div>
      <div className={styles.orangeDiv}></div>
      <div className={styles.img1}>
      <img  src='/images/banners/girl-eating.png' />
      </div>
      <div className={styles.img2}>
      <img src='/images/banners/girl-eating-noodles.png' />
      </div>
    </section>
  );
}

// components/Hero/Hero.module.css
