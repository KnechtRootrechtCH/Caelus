import React from 'react';
import { observer } from "mobx-react"

import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { StoreContext } from '../stores/StoreContext';

const Header = observer (
  class Header extends React.Component {

    render() {
        return (
          <React.Fragment>
            <AppBar position="static"
              sx={{ zIndex: { md: '2000', xs: '1000' }, position: 'relative' }}
              >
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={() => this.context.toggleDrawer()}
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


Header.contextType = StoreContext;
export default Header;