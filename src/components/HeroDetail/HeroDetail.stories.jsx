import React from 'react';

import HeroDetail from './HeroDetail';

// Sample data using Dominik's stats as of 2/5/2022
const sampleHeroData = {
  against_games: 154,
  against_win: 83,
  games: 46,
  hero_id: 17,
  last_played: 1558261959,
  win: 26,
  with_games: 114,
  with_win: 63,
};

export default {
  title: 'DOTA/HeroDetail',
  component: HeroDetail,
  argTypes: {},
  args: {
    hero: sampleHeroData,
    bgColor: '#2d3741',
    highestMatchCount: 500,
    highestWinPercent: 60,
    highestKDA: 5,
  },
};

const Template = (args) => <HeroDetail {...args} />;

export const StandardHero = Template.bind({});
StandardHero.args = {
  hero: sampleHeroData,
};
