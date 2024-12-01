// StatsSection.jsx
import React from 'react';
import styles from './StatsSection.module.css';

export default function StatsSection() {
  const stats = [
    { count: '546+', label: 'Registered Riders' },
    { count: '789,900+', label: 'Orders Delivered' },
    { count: '690+', label: 'Restaurants Partnered' },
    { count: '17,457+', label: 'Food Items' }
  ];

  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className={styles.stat}>
              <h3 className={styles.count}>{stat.count}</h3>
              <p className={styles.label}>{stat.label}</p>
            </div>
            {index < stats.length - 1 && <div className={styles.divider}></div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}