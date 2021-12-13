import React from 'react';
import { useContext} from "react"
import { observer } from "mobx-react"
import { StoreContext } from '../stores/StoreContext';

import Container from '@mui/material/Container';

import { SignIn} from './SignIn';

export const Router = observer (() => {
  const context = useContext(StoreContext);
  if (context.authentication.isAuthenticated) {
    return (
      <Container
        component="main"
        maxWidth="xl"
        sx={{ paddingLeft: { xs: '24px', lg: '264px' }, width: '100%' }}
        >
        <h1>Hello, {context.authentication.user.displayName}</h1>
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
})