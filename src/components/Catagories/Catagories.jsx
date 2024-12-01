import React from 'react';
import styles from './Catagories.module.css';

const Catagories=({data,handleAddToCart})=> {
  
  return (
    <div className={styles.itemContainer}>
      <h2>Fries</h2>
      <div className={styles.itemFlex}>
        {data?.map((item) => (
          <div className={styles.itemCard} key={item.id}>
            <div className={styles.itemDesc}>
              <h4>{item.title}</h4>
              <p className={styles.itemContent}>{item.desc}</p>
              <p className={styles.price}>{item.price}</p>
            </div>
            <div className={styles.itemImage}>
              <img src={item.imageUrl} alt={item.title} />
              <div className={styles.btnShadow}>
                <button className={styles.addButton} 
                onClick={()=>handleAddToCart(item)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catagories;