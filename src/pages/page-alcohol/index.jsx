import React from 'react';
import styles from './alcohol.module.css';
import AlcoholList from './AlcoholList';


const Alcohol = () => (
  <div className={styles.page}>
    <header>
      <h1 className={styles.title}>Sélection Alcools – Gault & Millau</h1>
      <p className={styles.subtitle}>Les meilleures bouteilles classées par nos experts.</p>
    </header>
    <AlcoholList />
    
  </div>
  
);

export default Alcohol;
