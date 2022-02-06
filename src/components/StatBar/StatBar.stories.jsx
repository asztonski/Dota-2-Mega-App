import React from 'react';

import StatBar from './StatBar';

export default {
  title: 'DOTA/StatBar',
  component: StatBar,

  argTypes: {
    /**
     * Only use me once per page for the preferred user action.
     */
    fillColor: { control: 'color' },
  },

  parameters: {
    docs: {
      storyDescription: `
        IS THIS WORKING???
        LOL.
      `,
    },
  },
};

const Template = (args) => <StatBar {...args} />;

export const Full = Template.bind({});

Full.args = {
  percentFilled: 100,
};
Full.parameters = {
  docs: {
    storyDescription: `
          FULL
          LOL.
        `,
  },
};
Full.storyName = 'Fully Filled';

export const Half = Template.bind({});
Half.args = {
  percentFilled: 50,
};

Half.storyName = 'Half Filled';

// Half.parameters = {
//   docs: {
//     storyDescription: "A bar that's 50% filled, using a blue fill color",
//   },
// };
