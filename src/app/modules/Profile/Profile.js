import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

const { HeaderLayout } = require('app/shared/components');

class Profile extends React.Component {
  render() {
    return (
      <HeaderLayout>
        <h1>This is Profile Page</h1>
      </HeaderLayout>
    );
  }
}

export default Profile;
