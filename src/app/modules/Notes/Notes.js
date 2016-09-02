import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

const styles = require('./Notes.scss');
const { SimpleToggle } = require('app/modules');

console.log('require: ', require('app/modules'));

// Will be set at compile time
const themeConfig = {
  color1: 'green',
  color2: 'yellow'
};

// Needed if component needs to use custom theme colors
const themeStyle = {
  heading: {
    color: themeConfig.color1
  }
};

class Notes extends React.Component {
  render() {
    return (
      <SimpleToggle />
    );
  }
}

export default cssModules(Notes, styles);
