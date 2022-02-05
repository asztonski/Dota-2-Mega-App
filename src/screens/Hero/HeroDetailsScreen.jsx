import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as heroAPI from '../../apis/heroAPI';
import styles from './HeroDetailsScreen.module.scss';

// A Screen to show an individual Hero's details
// This will be found at the route: /heroes/:heroId
function HeroDetailsScreen(props) {
  const { heroId } = useParams();

  const [hero, setHero] = useState();

  useEffect(() => {
    heroAPI.gethero(heroId).then((value) => {
      setHero(value);
      console.log(value);
    });
  }, [heroId]);

  if (!hero) return 'Loading hero Details';

  return (
    <div className={styles.HeroDetails}>
      <div>Account ID: {heroId}</div>
      <div>MMR Estimate: {hero['mmr_estimate'].estimate}</div>
      <img
        className={styles.ProfileImage}
        src={hero.profile.avatarfull}
        alt={`Avatar for ${hero.profile.personaname}`}
      />
      <div>Hero Name: {hero.profile.personaname}</div>
      <div>Profile URL: {hero.profile.profileurl}</div>
    </div>
  );
}

export default HeroDetailsScreen;
