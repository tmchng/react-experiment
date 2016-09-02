import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import cssModules from 'react-css-modules';

const styles = require('./Header.scss');

class Header extends React.Component {
  render() {
    const { props } = this;

    return (
      <header styleName="header">
        <h1 styleName="comp-name">{props.companyName}</h1>
        <ul styleName="nav-links">
          <li><Link to="/notes">Notes</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/simple-toggle">Simple Toggle</Link></li>
        </ul>
      </header>
    );
  }
}

Header.propTypes = {
  companyName: PropTypes.string.isRequired
};

export default cssModules(Header, styles);
