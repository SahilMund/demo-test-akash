import styles from './PartnerSection.module.css';

export default function PartnerSection() {
  return (
    <section className={styles.partner}>
      <div className={styles.container}>
        <div className={`${styles.card} ${styles.businessCard}`}>
          <div className={styles.flag}>Earn more with lower fees</div>
          <div className={styles.content}>
            <div className={styles.type}>Signup as a business</div>
            <h3 className={styles.title}>Partner with us</h3>
            <button className={styles.button}>Get Started</button>
          </div>
          <div className={styles.backgroundImg}>
            <img src='/images/banners/partnerwithus.svg' />
          </div>
        </div>

        <div className={`${styles.card} ${styles.riderCard}`}>
          <div className={styles.flag}>Avail exclusive perks</div>
          <div className={styles.content}>
            <div className={styles.type}>Signup as a rider</div>
            <h3 className={styles.title}>Ride with us</h3>
            <button className={styles.button}>Get Started</button>
          </div>
          <div className={styles.backgroundImg}>
            <img src='/images/banners/ridewithus.svg' />
          </div>
        </div>
      </div>
    </section>
  );
}