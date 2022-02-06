import React from 'react';

import MatchDetail from './MatchDetail';

// Sample data using Dominik's stats as of 2/5/2022
const sampleMatchData = {
  assists: 0,
  cluster: 227,
  deaths: 8,
  duration: 3069,
  game_mode: 19,
  gold_per_min: 588,
  hero_damage: 0,
  hero_healing: 64682,
  hero_id: 47,
  is_roaming: null,
  kills: 0,
  lane: null,
  lane_role: null,
  last_hits: 101,
  leaver_status: 0,
  lobby_type: 12,
  match_id: 6407095204,
  party_size: null,
  player_slot: 2,
  radiant_win: true,
  skill: null,
  start_time: 1643611310,
  tower_damage: 0,
  version: null,
  xp_per_min: 582,
};

export default {
  title: 'DOTA/MatchDetail',
  component: MatchDetail,
  argTypes: {},
  args: {
    match: sampleMatchData,
    bgColor: '#2d3741',
    highestDuration: 500,
  },
};

const Template = (args) => <MatchDetail {...args} />;

export const StandardMatch = Template.bind({});
StandardMatch.args = {
  match: sampleMatchData,
};
