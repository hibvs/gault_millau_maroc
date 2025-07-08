import React from 'react';
import AlcoholCard from './AlcoholCard';
import styles from './alcohol.module.css';

const AlcoholSection = ({ title, items }) => (
  <section className={styles.section}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    <div className={styles.grid}>
      {items.map(item => (
        <AlcoholCard key={item.id} item={item} />
      ))}
    </div>
  </section>
);

export default AlcoholSection;
