import React, { useEffect, useState } from 'react';
import { getHeroes } from '../apis/dota';
import styles from './HeroesScreen.module.css';

function HeroesScreen() {
  const [heroes, setHeroes] = useState('');

  useEffect(() => {
    const fetchHeroes = async (playerName) => {
      const fetchedHeroes = await getHeroes();
      setHeroes(fetchedHeroes);

      console.log(fetchedHeroes);
    };

    fetchHeroes();
  }, []);

  const renderedHeroesList = !heroes
    ? null
    : heroes.map((hero) => {
        return (
          <div className={styles.HeroItem}>
            <div>Name: {hero['localized_name']}</div>
            <div>Primary Attribute: {hero['primary_attr']}</div>
            <div>Attack Type: {hero['attack_type']}</div>
            <div>Legs: {hero.legs}</div>
            <div>
              Roles:
              <ul>
                {hero.roles.map((role) => (
                  <li>{role}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      });

  return (
    <div className={styles.HeroesScreen}>
      <h1 className={styles.Title}>Heroes</h1>
      <div className={styles.HeroesList}>{renderedHeroesList}</div>
    </div>
  );
}

export default HeroesScreen;
