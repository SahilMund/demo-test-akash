import React from 'react';
import styles from './Reviews.module.css'; // Import the CSS module

const CustomerReviews = () => {
  return (
    <div className={styles.customerReviewContainer}>
      <div className={styles.cRHeader}>
        <h2>Customer Reviews</h2>
        <div className={styles.naviBtn}>
          <button>
            <img
              src="https://img.icons8.com/?size=100&id=60636&format=png&color=000000"
              alt="left-arrow"
            />
          </button>
          <button>
            <img
              src="https://img.icons8.com/?size=100&id=60671&format=png&color=000000"
              alt="right-arrow"
            />
          </button>
        </div>
      </div>
      <div className={styles.cRCardList}>
        <div className={styles.cRCard}>
          <div className={styles.cRCardHeader}>
            <div className={styles.cRUserDetails}>
              <img
                src="https://img.icons8.com/?size=100&id=sVl5GKPpWl5z&format=png&color=000000"
                alt="user-icon"
              />
              <div className={styles.cRUserName}>
                <h5>name</h5>
                <p>location</p>
              </div>
            </div>
            <div className={styles.cRRatings}>
              <h3>* * * * *</h3>
              <div className={styles.cRDate}>
                <img src="https://img.icons8.com/?size=100&id=67447&format=png&color=FD7E14" alt="clock-icon" />
                <p>24th September,2025</p>
              </div>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
            sequi, cumque est fugiat eius ipsum doloribus reiciendis optio ipsa
            iusto amet, et nobis. Corporis asperiores soluta aliquam maiores
            culpa?
          </p>
        </div>
        <div className={styles.cRCard}>
          <div className={styles.cRCardHeader}>
            <div className={styles.cRUserDetails}>
              <img
                src="https://img.icons8.com/?size=100&id=sVl5GKPpWl5z&format=png&color=000000"
                alt="user-icon"
              />
              <div className={styles.cRUserName}>
                <h5>name</h5>
                <p>location</p>
              </div>
            </div>
            <div className={styles.cRRatings}>
              <h3>* * * * *</h3>
              <div className={styles.cRDate}>
                <img src="https://img.icons8.com/?size=100&id=67447&format=png&color=FD7E14" alt="clock-icon" />
                <p>24th September,2025</p>
              </div>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
            sequi, cumque est fugiat eius ipsum doloribus reiciendis optio ipsa
            iusto amet, et nobis. Corporis asperiores soluta aliquam maiores
            culpa?
          </p>
        </div>
        <div className={styles.cRCard}>
          <div className={styles.cRCardHeader}>
            <div className={styles.cRUserDetails}>
              <img
                src="https://img.icons8.com/?size=100&id=sVl5GKPpWl5z&format=png&color=000000"
                alt="user-icon"
              />
              <div className={styles.cRUserName}>
                <h5>name</h5>
                <p>location</p>
              </div>
            </div>
            <div className={styles.cRRatings}>
              <h3>* * * * *</h3>
              <div className={styles.cRDate}>
                <img src="https://img.icons8.com/?size=100&id=67447&format=png&color=FD7E14" alt="clock-icon" />
                <p>24th September,2025</p>
              </div>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
            sequi, cumque est fugiat eius ipsum doloribus reiciendis optio ipsa
            iusto amet, et nobis. Corporis asperiores soluta aliquam maiores
            culpa?
          </p>
        </div>
      </div>
      <div className={styles.ratings}>
        <h2>4.5</h2>
        <h4>* * * * *</h4>
        <p>1360 reviews</p>
      </div>
    </div>
  );
};

export default CustomerReviews;