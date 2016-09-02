import React from 'react';
import { Redirect, Route, IndexRedirect } from 'react-router';

const { Notes, Profile, SimpleToggle } = require('app/modules');

export default (
  <Route path="/">
    <IndexRedirect to="/notes"/>
    <Route path="notes" component={Notes}/>
    <Route path="profile" component={Profile}/>
    <Route path="simple-toggle" component={SimpleToggle}/>
    <Redirect from="*" to="/"/>
  </Route>
);
