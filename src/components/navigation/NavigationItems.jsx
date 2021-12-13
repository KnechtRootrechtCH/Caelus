import React from 'react';
import { observer } from "mobx-react"
import { useLocation, useNavigate } from 'react-router-dom'

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AssignmentIcon from '@mui/icons-material/Assignment';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';

export const NavigationItems = observer (() => {
  const location = useLocation();
  const path = location?.pathname;
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <List component="nav" aria-label="main hangar pledges">
        <ListItem
          disablePadding
          onClick={() => navigate('hangar')}
          to='/hangar'
          selected={path?.includes('/hangar')}
          >
          <ListItemButton>
            <ListItemIcon>
              <WarehouseIcon />
            </ListItemIcon>
            <ListItemText primary="Hangar" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => navigate('pledges')}
          to='/pledges'
          selected={path?.includes('/pledges')}
          >
          <ListItemButton>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Pledges" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="administration masterdata">
      <ListItem
        disablePadding
        onClick={() => navigate('masterdata')}
        to='/masterdata'
        selected={path?.includes('/masterdata')}
        >
          <ListItemButton>
            <ListItemIcon>
              <StorageOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Masterdata" />
          </ListItemButton>
        </ListItem>
      </List>
    </React.Fragment>
  )
})