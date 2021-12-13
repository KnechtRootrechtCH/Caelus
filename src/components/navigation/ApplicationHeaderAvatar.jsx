import React from 'react';
import { observer } from "mobx-react"
import { useNavigate } from 'react-router-dom'
import { useContext} from "react"
import { StoreContext } from '../../stores/StoreContext';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import SignoutIcon from '@mui/icons-material/Logout';
import UserIcon from '@mui/icons-material/PermIdentity';


export const ApplicationHeaderAvatar = observer (() => {
  const context = useContext(StoreContext)
  const [anchorElement, setAnchorElement] = React.useState(null);
  const navigate = useNavigate();

  const stringToColor = (string) => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  const stringAvatar = (name) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  const handleOpen = (event) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  const handleNavigate = (path) => {
    handleClose();
    navigate(path);
  }

  const handleSignout = () => {
    handleClose();
    context.authentication.signOut();
  }

  const photoUrl = context.authentication.user.photoURL;
  const displayName = context.authentication.user.displayName;

  return (
    <React.Fragment>
    <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpen}
          color="inherit"
        >
        { photoUrl ?
          <Avatar src={photoUrl} alt={displayName} {...stringAvatar(displayName)}/>
          :
          <Avatar {...stringAvatar(displayName)} />
        }
      </IconButton>
      <Menu
        id="menu-appbar"
        sx={{ zIndex: '3000' }}
        anchorEl={anchorElement}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElement)}
        onClose={handleClose}
      >
      <MenuItem onClick={() => handleNavigate('profile')}>
        <ListItemIcon>
          <UserIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Profile</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleSignout}>
        <ListItemIcon>
          <SignoutIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>SignOut</ListItemText>
      </MenuItem>
  </Menu>
  </React.Fragment>
  );
})