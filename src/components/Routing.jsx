import React from 'react';
import { StoreContext } from '../stores/StoreContext';
import Container from '@mui/material/Container';

import { SignIn} from './SignIn';

class Routing extends React.Component {
  render() {
    if (this.context.authentication.isAuthenticated) {
      return (
        <Container
          component="main"
          maxWidth="xl"
          sx={{ paddingLeft: { xs: '24px', lg: '264px' }, width: '100%' }}
          >
          <h1>Hello, {this.context.authentication.user.displayName}</h1>
        </Container>
      );
    }
    else {
      return (
      <div>
        <SignIn />
      </div>
      )
    }
  }
}

Routing.contextType = StoreContext;
export default Routing;