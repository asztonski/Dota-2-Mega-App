import React from 'react';

import PlayerOverview from './PlayerOverview';

// Sample data using Dominik's stats as of 2/5/2022
const dominikPlayerData = {
  profile: {
    personaname: 'Worl Boss',
    avatarfull:
      'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/32/322fe619c614f6b60b86fa14b0ecf2498b4bac38_full.jpg',
    profileurl: 'https://steamcommunity.com/profiles/76561198120108582/',
  },
  win: 745,
  lose: 776,
  leaderboard_rank: 'N/A',
};

// Sample data from a top-rated player
const topPlayerData = {
  profile: {
    personaname: '你开心就好',
    avatarfull:
      'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/34/3495a2d38f4b7a69cbed80a5c44c39942c3b84b2_full.jpg',
    profileurl: 'https://steamcommunity.com/id/hzp3927/',
  },
  win: 3784,
  lose: 3382,
  leaderboard_rank: 268,
};

export default {
  title: 'DOTA/PlayerOverview',
  component: PlayerOverview,
  argTypes: {},
};

const Template = (args) => <PlayerOverview {...args} />;

export const DominikOverview = Template.bind({});
DominikOverview.args = {
  /** Dominik */
  player: dominikPlayerData,
};

export const TopPlayerOverview = Template.bind({});
TopPlayerOverview.args = {
  /* TEST */
  player: topPlayerData,
};
