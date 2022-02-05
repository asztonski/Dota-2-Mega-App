/* Helps us map an ID to a Mode's name. Many OpenDOTA results give us a "mode_id" int instead of the Mode's actual name.
So we can use this as a look-up table */
const modes = {
  0: 'Unknown',
  1: 'All Pick',
  2: 'Captains mode',
  3: 'Random draft',
  4: 'Single draft',
  5: 'All random',
  6: 'Intro',
  7: 'Diretide',
  8: 'Reverse captains mode',
  9: 'Greeviling',
  10: 'Tutorial',
  11: 'Mid only',
  12: 'Least played',
  13: 'Limited heroes',
  14: 'Compendium matchmaking',
  15: 'Custom',
  16: 'Captains draft',
  17: 'Balanced draft',
  18: 'Ability draft',
  19: 'Event',
  20: 'All random deathmatch',
  21: '1v1_mid',
  22: 'All draft',
  23: 'Turbo',
  24: 'Mutation',
};

export default modes;
