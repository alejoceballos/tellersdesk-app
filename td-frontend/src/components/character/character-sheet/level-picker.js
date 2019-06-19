import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import uuid from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as fasCircle} from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle} from '@fortawesome/free-regular-svg-icons';

const dataQaId = 'level-picker-level';

const LevelPicker = (props) => {
  const { value, max } = props;

  const levels = map(
    new Array(max), (
      item, index
    ) => {
      const isLevel = index < value;
      const dataQa = `${dataQaId}-${isLevel ? 'yes' : 'no'}`;
      const icon = isLevel ? fasCircle : farCircle;

      return (
        <span data-qa-id={dataQaId} data-qa={dataQa} key={uuid()}>
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
};

export default LevelPicker;
