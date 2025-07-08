import React from 'react';
import AlcoholSection from './AlcoholSection';

// Exemple de données structurées comme sur G&M
const alcoholData = {
  vins: [
    {
      id: 'v1',
      name: 'Lou Rasis Eïsubiàs',
      vintage: 2022,
      score: 94,
      appellation: 'Isère IGP',
      image: 'https://via.placeholder.com/300x160?text=Lou+Rasis',
      description: 'Un vin rouge puissant avec de beaux tanins, arômes de cassis et mûre.',
    },
    {
      id: 'v2',
      name: 'Clos des Treilles',
      vintage: 2022,
      score: 94,
      appellation: 'Menetou‑Salon',
      image: 'https://via.placeholder.com/300x160?text=Clos+des+Treilles',
      description: 'Vin blanc frais, arômes floraux, belle minéralité.',
    },
  ],
  spiritueux: [
    {
      id: 's1',
      name: 'Mahia de Meknès',
      vintage: '---',
      score: 88,
      appellation: 'Eau-de-vie',
      image: 'https://via.placeholder.com/300x160?text=Mahia',
      description: 'Eau‑de‑vie locale parfumée à l’anis, digestif traditionnel.',
    },
  ],
  bieres: [
    {
      id: 'b1',
      name: 'Flag Pils',
      vintage: '---',
      score: 85,
      appellation: 'Pilsbier',
      image: 'https://via.placeholder.com/300x160?text=Flag+Pils',
      description: 'Bière pils marocaine, légère et désaltérante.',
    },
  ],
};

const AlcoholList = () => (
  <>
    <AlcoholSection title="Vins" items={alcoholData.vins} />
    <AlcoholSection title="Spiritueux" items={alcoholData.spiritueux} />
    <AlcoholSection title="Bières" items={alcoholData.bieres} />
  </>
);

export default AlcoholList;
