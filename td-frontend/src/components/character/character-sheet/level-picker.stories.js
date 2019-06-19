import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import LevelPicker from './level-picker';

export const levelPicker = {
  max: 5,
  value: 3,
};

// export const actions = {
//   onPinTask: action('onPinTask'),
//   onArchiveTask: action('onArchiveTask'),
// };

storiesOf(
  'LevelPicker', module
)
  .add(
    'default', () => <LevelPicker {...levelPicker} />
  );
