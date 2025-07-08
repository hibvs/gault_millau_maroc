import React from 'react';
import styles from './alcohol.module.css';

const AlcoholCard = ({ item }) => {
  const { image, name, vintage, score, appellation, description } = item;

  return (
    <div className={styles.card}>
      <img src={image} alt={`${name}`} className={styles.image} />
      <div className={styles.cardHeader}>
        <h3 className={styles.itemTitle}>{name} <span className={styles.vintage}>({vintage})</span></h3>
        <div className={styles.score}>{score}/100</div>
      </div>
      <div className={styles.appellation}>{appellation}</div>
      <p className={styles.itemDescription}>{description}</p>
      <a href="#" className={styles.button}>Voir la fiche</a>
    </div>
  );
};

export default AlcoholCard;
