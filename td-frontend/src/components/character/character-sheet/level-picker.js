import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import uuid from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as fasCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons';

const INCREMENT = 1;

const LevelPicker = props => {
  console.log('=> LevelPicker');

  const { value, max } = props;

  const levels = map(
    new Array(max), (item, index) => {
      const handleCLick = () => {
        const newValue = index + INCREMENT;
        props.onLevelClick(newValue);
      };

      const isLevel = index < value;
      const dataQa = `level-picker-${isLevel ? 'yes' : 'no'}`;
      const icon = isLevel ? fasCircle : farCircle;

      return (
        <span data-qa={dataQa} key={uuid()} onClick={handleCLick}>
          <FontAwesomeIcon icon={icon} />
        </span>
      );
    }
  );

  return (
    <>{levels}</>
  );
};

LevelPicker.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onLevelClick: PropTypes.func
};

LevelPicker.defaultProptypes = {
  onLevelClick: () => {}
};

const areEqual = (prevProps, nextProps) =>
  nextProps.value === prevProps.value && nextProps.max === prevProps.max;

const LevelPickerMemo = memo(LevelPicker, areEqual);

export default LevelPickerMemo;
