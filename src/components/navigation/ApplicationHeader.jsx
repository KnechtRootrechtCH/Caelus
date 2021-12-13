import React from 'react';
import { observer } from "mobx-react"

import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { StoreContext } from '../../stores/StoreContext';

const ApplicationHeader = observer (
  class ApplicationHeader extends React.Component {

    render() {
        return (
          <React.Fragment>
            <AppBar position="static"
              sx={{ zIndex: { lg: '2000', xs: '1000' }, position: 'relative' }}
              >
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2, display: { md: 'flex', xs: 'none' } }}
                  onClick={() => this.context.toggleDrawer()}
                >
                  <MenuIcon />
                </IconButton>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2, display: { md: 'none', xs: 'flex' } }}
                  onClick={() => this.context.toggleDrawerMobile()}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  sx={{ flexGrow: 1 }}
                >
                  Dashboard
                </Typography>
              </Toolbar>
            </AppBar>

          </React.Fragment>
        )
    }
  }
)


ApplicationHeader.contextType = StoreContext;
export default ApplicationHeader;