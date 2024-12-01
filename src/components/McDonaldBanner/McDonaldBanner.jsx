import React from "react";
import styles from "./McDonaldBanner.module.css";

const McDonaldBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.leftSection}>
          <h3>I'm lovin' it!</h3>
          <h1>McDonald’s East London</h1>
          <div className={styles.orderInfo}>
            <div className={styles.infoBox}>
            <img src="https://img.icons8.com/?size=100&id=65285&format=png&color=FFFFFF" alt="checklist" />
              <p>Minimum Order: 12 GBP</p>
            </div>
            <div className={styles.infoBox}>
                <img src="https://img.icons8.com/?size=100&id=9823&format=png&color=FFFFFF" alt="cycle" />
              <p>Delivery in 20–25 Minutes</p>
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.ratingBox}>
            <span className={styles.rating}>3.4</span>
            <p>1,360 reviews</p>
          </div>
          <div className={styles.imageContainer}>
            <img
              src="https://s3-alpha-sig.figma.com/img/408d/a7d6/40abc99b6edf6290110ecf4a706ecaa8?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SAoyt3EYkb1onpgNRT6Px~c-pB1btbZZv2s-mg5yjCAY17V4IycJCy~dPuQO7v~A5fxsO9MWqI9AZ6ePjHw90ooC3nSoEgc-eSaAgeJajlrCSwbbF53m8fq3kMChYmJTGrgiusb97KgOkk8OAp8nDI5iMEErV7Ildwd59zDTnV1sKXM8XHbt2HFJiGPayIM5XbelyvCp9q54z60ZY2ry5ex4WkO7vCIstUCW-L~gtpn14ztlIgg0CvN6buuS62~OZ4oozo0Zk8eg9WaWJaHmAABBVbf8BXspFTJ9lAN-pwBdVsvC0iMPodFth7o5jFaLigt0C2j7Hd-djdx2w7Pxfg__" // Replace this URL
              alt="McDonald's Meal"
            />
          </div>
        </div>
        <div className={styles.openHours}>
            <img src="https://img.icons8.com/?size=100&id=10247&format=png&color=FFFFFF" alt="clock" />
            <p>Open until 3:00 AM</p>
        </div>
      </div>
      <div className={styles.searchBar}>
        <h3>All Offers from McDonald's East London</h3>
        <input type="text" placeholder="Search from menu..." />
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>Offers</li>
          <li>Burgers</li>
          <li>Fries</li>
          <li>Snacks</li>
          <li>Salads</li>
          <li>Cold drinks</li>
          <li>Happy Meal®</li>
          <li>Desserts</li>
          <li>Hot drinks</li>
          <li>Sauces</li>
          <li>Orbit®</li>
        </ul>
      </nav>
      
    </div>
  );
};

export default McDonaldBanner;
