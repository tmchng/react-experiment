import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

const styles = require('./HeaderLayout.scss');
const { Header } = require('app/shared/components');

class HeaderLayout extends React.Component {
  render() {
    const { props } = this;

    return (
      <div styleName="header-layout">
        <div styleName="header-container">
          <Header companyName="BBAE White"/>
        </div>
        <div styleName="layout-content">
          { props.children }
        </div>
      </div>
    );
  }
};

export default cssModules(HeaderLayout, styles);
