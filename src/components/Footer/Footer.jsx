import React from 'react';
import constants from '../../utils/constants';
import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.descContainer}>
        <div className={styles.order}>
          <img src={constants.APP_LOGO} alt="logo" />
          <div className={styles.download}>
            <img src={constants.APP_STORE_LOGO} alt="appStoreIcon" />
            <img src={constants.PLAY_STORE_LOGO} alt="playStoreIcon" />
          </div>
          <p>Company # 490039-445, Registered with <br /> House of Companies.</p>
        </div>
        <div className={styles.social}>
          <h4>Get Exclusive Deals in your Inbox</h4>
          <div className={styles.search}>
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className={styles.searchInputField}
            />
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
          <p>we want spam, read our <u>email policy</u></p>
          <div className={styles.socialIconSection}>
            <img src={constants.FACEBOOK_ICON} alt="facebook-icon" />
            <img src={constants.INSTAGRAM_ICON} alt="instagram-icon" />
            <img src={constants.TIK_TOK_ICON} alt="tik-tok-icon" />
            <img src={constants.SNAPCHAT_ICON} alt="snapchat-icon" />
          </div>
        </div>
        <div className={styles.impLink}>
          <div className={styles.legalPages}>
            <h4>Legal Pages</h4>
            <ul>
              <li>
                <u>Terms and Conditions</u>
              </li>
              <li>
                <u>Privacy</u>
              </li>
              <li>
                <u>Cookies</u>
              </li>
              <li>
                <u>Modern Slavery Statement</u>
              </li>
            </ul>
          </div>
          <div className={styles.importantLink}>
            <h4>Important Links</h4>
            <ul>
              <li>
                <u>Get help</u>
              </li>
              <li>
                <u>Add your restaurant</u>
              </li>
              <li>
                <u>Sing up to deliver</u>
              </li>
              <li>
                <u>Create a business account</u>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <p>Order.uk Copyright, All right Reserved.</p>
        <div className={styles.terms}>
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Pricing</p>
          <p>Do not sell or share my personal information</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;