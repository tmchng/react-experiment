import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';

import * as actions from './actions';

const styles = require('./SimpleToggle.scss');
const { Header, NumberToggle } = require('app/shared/components');

class SimpleToggle extends React.Component {
  render() {
    const { props } = this;

    return (
      <div>
        <Header companyName="fuck" />
        <NumberToggle
          num={ props.num }
          onIncrement={ props.actions.incrementNum }
          onDecrement={ props.actions.decrementNum } />
      </div>
    );
  }
}

SimpleToggle.propTypes = {
  actions: PropTypes.object.isRequired,
  num: PropTypes.number.isRequired
};

SimpleToggle.defaultProps = {
  num: 0
};


const mapStateToProps = (state, ownProps) => {
  console.log('state is ', state);
  return {
    num: state.simpleToggle.num
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});


const StyledComponent = cssModules(SimpleToggle, styles);

export default connect(mapStateToProps, mapDispatchToProps)(StyledComponent);
