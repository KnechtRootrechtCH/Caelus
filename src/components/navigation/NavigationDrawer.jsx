import React from 'react';
import { observer } from "mobx-react"

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Toolbar from '@mui/material/Toolbar';

import { useContext} from "react"
import { StoreContext } from '../../stores/StoreContext';
import { NavigationItems } from './NavigationItems';

export const NavigationDrawer = observer (() => {
  const context = useContext(StoreContext)
  return (
    <React.Fragment>
      { context.authentication.isAuthenticated &&
        <React.Fragment>
          <Box
            component="nav"
            sx={{ display: { lg: 'block', xs: 'none' }, width: { lg: context.drawerWidth } }}
            >
            <Drawer
              sx={{ display: { lg: 'block', xs: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: context.drawerWidth } }}
              variant="permanent"
              open={context.drawer}
              hideBackdrop={true}
              onClose={() => context.setDrawer(false)}
              >
              <Toolbar />
              <NavigationItems />
            </Drawer>
          </Box>
          <SwipeableDrawer
            sx={{ display: { lg: 'none', xs: 'block' } }}
            variant="temporary"
            open={context.drawerMobile}
            onOpen={() => context.setDrawerMobile(true)}
            onClose={() => context.setDrawerMobile(false)}
            >
            <NavigationItems />
          </SwipeableDrawer>
        </React.Fragment>
      }
    </React.Fragment>
  )
});