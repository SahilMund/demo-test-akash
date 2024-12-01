import { CategoryCard } from '../micro-components';
import styles from './PopularCategories.module.css';

export default function PopularCategories() {
  const categories = [
    { id: 1, name: 'Burgers & Fast food', count: 21, image: '/images/foods/burgers.svg' },
    { id: 2, name: 'Salads', count: 32, image: '/images/foods/salad.svg' },
    { id: 3, name: 'Pasta & Casuals', count: 8, image: '/images/foods/pasta.svg' },
    { id: 4, name: 'Pizza', count: 20, image: '/images/foods/pizza.svg' },
    { id: 5, name: 'Breakfast', count: 4, image: '/images/foods//breakfast.svg' },
    { id: 6, name: 'Soups', count: 25, image: '/images/foods/soups.svg' }
  ];

  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        <h2 className={styles.title}>Order.uk Popular Categories 😋</h2>
        <div className={styles.grid}>
          {categories.map(category => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}