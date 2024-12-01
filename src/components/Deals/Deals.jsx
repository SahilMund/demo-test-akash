import { useState } from 'react';
import styles from './Deals.module.css';
import { OverviewCard } from '../micro-components';

const DEALS_DATA = {
  'Pizza & Fast food': [
    { id: 1, name: "McDonald's East London", discount: 20, type: 'Restaurant', image: '/images/deals/img1.svg' },
    { id: 2, name: 'First Order Discount', discount: 20, type: 'Restaurant', image: '/images/deals/img1.svg' },
    { id: 3, name: 'Free Ice Cream Offer', discount: 100, type: 'Restaurant', image: '/images/deals/img1.svg' }
  ],
  'Vegan': [
    { id: 4, name: 'Vegan Discount', discount: 20, type: 'Restaurant', image: '/images/deals/img1.svg' },
    { id: 5, name: 'Green Cafe', discount: 15, type: 'Restaurant', image: '/images/deals/img1.svg' }
  ],
  'Sushi': [
    { id: 6, name: 'Sushi Palace', discount: 25, type: 'Restaurant', image: '/images/deals/img1.svg' },
    { id: 7, name: 'Tokyo Express', discount: 30, type: 'Restaurant', image: '/images/deals/img1.svg' }
  ],
  'Others': [
    { id: 8, name: 'Local Cafe', discount: 10, type: 'Restaurant', image: '/images/deals/img1.svg' },
    { id: 9, name: 'Sweet Corner', discount: 40, type: 'Restaurant', image: '/images/deals/img1.svg' }
  ]
};

export default function Deals() {
  const [selectedCategory, setSelectedCategory] = useState('Pizza & Fast food');
  const categories = Object.keys(DEALS_DATA);

  return (
    <section className={styles.deals}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Up to -40% 🥡 Order.uk exclusive deals</h2>
          <div className={styles.categories}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.category} ${category === selectedCategory ? styles.active : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {DEALS_DATA[selectedCategory].map(deal => (
            <OverviewCard
              key={deal.id}
              {...deal}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Only keep layout styles in Deals.module.css */
