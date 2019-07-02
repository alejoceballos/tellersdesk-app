import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import uuid from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as fasCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons';

class LevelPicker extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value || nextProps.max !== this.props.max;
  }

  render() {
    const INCREMENT = 1;
    const { value, max } = this.props;

    const levels = map(
      new Array(max), (item, index) => {
        const onCLick = () => {
          const newValue = index + INCREMENT;
          this.props.onLevelClick(newValue);
        };

        const isLevel = index < value;
        const dataQa = `level-picker-${isLevel ? 'yes' : 'no'}`;
        const icon = isLevel ? fasCircle : farCircle;

        return (
          <span data-qa={dataQa} key={uuid()} onClick={onCLick}>
            <FontAwesomeIcon icon={icon} />
          </span>
        );
      }
    );

    return (
      <>{levels}</>
    );
  }
}

LevelPicker.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onLevelClick: PropTypes.func
};

export default LevelPicker;
