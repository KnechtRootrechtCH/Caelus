import React from 'react';
import { observer } from "mobx-react"

import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useContext} from "react"
import { StoreContext } from '../../stores/StoreContext';
import { ApplicationHeaderAvatar } from './ApplicationHeaderAvatar';

export const ApplicationHeader = observer (() => {
  const context = useContext(StoreContext)
  return (
    <React.Fragment>
      { context.authentication.isAuthenticated &&
        <AppBar
          position="static"
          color="secondary"
          enableColorOnDark
          sx={{ zIndex: { lg: '2000', xs: '1000' }, position: 'relative' }}
          >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { lg: 'none', xs: 'flex' } }}
              onClick={() => context.toggleDrawerMobile()}
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
              Caelus
            </Typography>
            { context.authentication.isAuthenticated &&
              <ApplicationHeaderAvatar />
            }
          </Toolbar>
        </AppBar>
      }
    </React.Fragment>
  )
})