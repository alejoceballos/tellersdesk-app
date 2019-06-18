import React from 'react';
import PropTypes from 'prop-types';
import { map, } from 'lodash';
import uuid from 'uuid';

const dataQaId = 'level-picker-level';

const LevelPicker = (props) => {
  const { value, max, } = props;

  const levels = map(
    new Array(max), (
      item, index
    ) => {
      const isLevel = index < value;
      const dataQa = `${dataQaId}-${isLevel ? 'yes' : 'no'}`;
      const mark = isLevel ? 'x' : 'o';
      return <span data-qa-id={dataQaId} data-qa={dataQa} key={uuid()}>{mark}</span>;
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
