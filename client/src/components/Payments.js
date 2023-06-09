import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../actions';

class Payments extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    // eslint-disable-next-line no-debugger
    debugger;

    return (
      <StripeCheckout
        name="Emaily"
        description="5$ for 5 credits"
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}>
        <button className="btn"> Add Credits </button>{' '}
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
