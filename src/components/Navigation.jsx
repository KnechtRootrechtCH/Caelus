import React from 'react';
import { observer } from "mobx-react"

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Toolbar from '@mui/material/Toolbar';

import { StoreContext } from '../stores/StoreContext';
import NavigationMenu from './NavigationMenu';

const Navigation = observer (
  class Navigation extends React.Component {

    render() {
        return (
          <React.Fragment>
            <Drawer
              sx={{ display: { md: 'block', xs: 'none' } }}
              variant="persistent"
              open={this.context.drawer}
              hideBackdrop={true}
              onClose={() => this.context.setDrawer(false)}
              >
              <Toolbar
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  px: [1],
                }}
              >
                <IconButton onClick={() => this.context.toggleDrawer()}>
                  <ChevronLeftIcon />
                </IconButton>
              </Toolbar>
              <NavigationMenu />
            </Drawer>
            <SwipeableDrawer
              sx={{ display: { md: 'none', xs: 'block' } }}
              variant="temporary"
              open={this.context.drawer}
              onOpen={() => this.context.setDrawer(true)}
              onClose={() => this.context.setDrawer(false)}
              >
              <NavigationMenu />
            </SwipeableDrawer>
          </React.Fragment>
        )
    }
  }
)


Navigation.contextType = StoreContext;
export default Navigation;