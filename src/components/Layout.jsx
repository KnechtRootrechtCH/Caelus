import React from 'react';
import { observer } from "mobx-react"
import Container from '@mui/material/Container';
import { Outlet } from "react-router-dom";

import { ApplicationHeader } from './navigation/ApplicationHeader';
import { NavigationDrawer } from './navigation/NavigationDrawer';

export const Layout = observer (() => {
  return (
    <React.Fragment>
      <ApplicationHeader />
      <NavigationDrawer />
      <Container
        component="main"
        maxWidth="xl"
        sx={{ paddingLeft: { xs: '24px', lg: '264px' }, width: '100%' }}
        >
        <Outlet />
      </Container>
    </React.Fragment>
  );
});