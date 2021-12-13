import React from 'react';
import { observer } from "mobx-react"

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AssignmentIcon from '@mui/icons-material/Assignment';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';

import { StoreContext } from '../../stores/StoreContext';

const NavigationItems = observer (
  class NavigationItems extends React.Component {

    render() {
        return (
          <React.Fragment>
            <nav aria-label="main hangar pledges">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <WarehouseIcon />
                    </ListItemIcon>
                    <ListItemText primary="Hangar" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pledges" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
            <Divider />
            <nav aria-label="administration masterdata">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <StorageOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Masterdata" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </React.Fragment>
        )
    }
  }
)


NavigationItems.contextType = StoreContext;
export default NavigationItems;