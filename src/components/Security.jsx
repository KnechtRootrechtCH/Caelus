import React from 'react';
import { observer } from "mobx-react"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { StoreContext } from '../stores/StoreContext';

import Routing from './Routing';

const Security = observer (
  class SignIn extends React.Component {
    render() {
      if (this.context.authentication.authenticated) {
        return (
        <Routing />
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
)


Security.contextType = StoreContext;
export default Security;