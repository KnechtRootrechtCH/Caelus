import React from 'react';
import { StoreContext } from '../stores/StoreContext';

class Test extends React.Component {
  render() {
    console.log('rendering this shieeeet');
    console.log(this.context);
    return <h1>Hello, {this.context.authentication.test}</h1>;
  }
}

Test.contextType = StoreContext;
export default Test;