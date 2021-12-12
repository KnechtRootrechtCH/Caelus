import React from 'react';
import { StoreContext } from '../stores/StoreContext';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class Routing extends React.Component {
  render() {
    if (this.context.authentication.authenticated) {
      return (
        <h1>Hello, {this.context.authentication.user.displayName}</h1>
      );
    }
    else {
      return (
      <div>
        <StyledFirebaseAuth uiConfig={this.context.authentication.uiConfig} firebaseAuth={this.context.fire.auth()} />
      </div>
      )
    }
  }
}

Routing.contextType = StoreContext;
export default Routing;