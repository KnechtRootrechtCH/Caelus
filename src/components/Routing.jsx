import React from 'react';
import { StoreContext } from '../stores/StoreContext';

class Routing extends React.Component {
  render() {
    return <h1>Hello, {this.context.authentication.user.displayName}</h1>;
  }
}

Routing.contextType = StoreContext;
export default Routing;