import styles from './AppPromo.module.css';

export default function AppPromo() {
  return (
    <section className={styles.appPromo}>
      <div className={styles.container}>
      <div className={styles.imageContainer}>
          <img src="/images/banners/friends-laughing-using.svg" alt="Order.uk App" className={styles.appImage} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Order<span className={styles.highlight}>ing</span> is more
            <span className={styles.subtitle}>Personalised & Instant</span>
          </h2>
          <p className={styles.description}>Download the Order.uk app for faster ordering</p>
          <div className={styles.stores}>
            <img src="/images/banners/appstore.svg" alt="Download on App Store" className={styles.storeIcon} />
            {/* <img src="/playstore.png" alt="Get it on Google Play" className={styles.storeIcon} /> */}
          </div>
        </div>
      </div>
    </section>
  );
}