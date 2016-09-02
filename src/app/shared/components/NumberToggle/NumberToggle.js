import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

const styles = require('./NumberToggle.scss');

const NumberToggle = (props) => {
  return (
    <div>
      <div>
        <h4>{ props.num }</h4>
      </div>
      <div>
        <button onClick={props.onDecrement}>Decrement</button>
        <button onClick={props.onIncrement}>Increment</button>
      </div>
    </div>
  );
};

NumberToggle.propTypes = {
  num: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default cssModules(NumberToggle, styles);
