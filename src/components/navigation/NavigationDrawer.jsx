import React from 'react';
import { observer } from "mobx-react"

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Toolbar from '@mui/material/Toolbar';

import { StoreContext } from '../../stores/StoreContext';
import NavigationItems from './NavigationItems';

const NavigationDrawer = observer (
  class NavigationDrawer extends React.Component {

    render() {
        return (
          <React.Fragment>
            { this.context.authentication.isAuthenticated &&
              <React.Fragment>
                <Box
                  component="nav"
                  sx={{ display: { lg: 'block', xs: 'none' }, width: { lg: this.context.drawerWidth } }}
                  >
                  <Drawer
                    sx={{ display: { lg: 'block', xs: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: this.context.drawerWidth } }}
                    variant="permanent"
                    open={this.context.drawer}
                    hideBackdrop={true}
                    onClose={() => this.context.setDrawer(false)}
                    >
                    <Toolbar />
                    <NavigationItems />
                  </Drawer>
                </Box>
                <SwipeableDrawer
                  sx={{ display: { lg: 'none', xs: 'block' } }}
                  variant="temporary"
                  open={this.context.drawerMobile}
                  onOpen={() => this.context.setDrawerMobile(true)}
                  onClose={() => this.context.setDrawerMobile(false)}
                  >
                  <NavigationItems />
                </SwipeableDrawer>
              </React.Fragment>
            }
          </React.Fragment>
        )
    }
  }
)


NavigationDrawer.contextType = StoreContext;
export default NavigationDrawer;