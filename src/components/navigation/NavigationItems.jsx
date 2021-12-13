import React from 'react';
import { observer } from "mobx-react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext} from "react";
import { StoreContext } from '../../stores/StoreContext';

import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AboutIcon from '@mui/icons-material/InfoOutlined';
import AdminIcon from '@mui/icons-material/Settings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import WarehouseIcon from '@mui/icons-material/Warehouse';

export const NavigationItems = observer (() => {
  const context = useContext(StoreContext);
  const [adminOpen, setAdminOpen] = React.useState(false);

  const location = useLocation();
  const path = location?.pathname;
  const navigate = useNavigate();

  const handleAdminToggle = () => {
    if (!adminOpen) {
      navigate('admin');
    }
    setAdminOpen(!adminOpen);
  }

  const handleNavigate = (path, isAdmin) => {
    navigate(path);
    if (!isAdmin) {
      setAdminOpen(false);
    }
    context.setDrawerMobile(false);
  }

  return (
    <React.Fragment>
      <List component="nav" aria-label="main hangar pledges administration masterdata settings">
        <ListItem
          disablePadding
          onClick={() => handleNavigate('hangar')}
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
          onClick={() => handleNavigate('pledges')}
          selected={path?.includes('/pledges')}
          >
          <ListItemButton>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Pledges" />
          </ListItemButton>
        </ListItem>
        <ListItemButton onClick={handleAdminToggle}>
          <ListItemIcon>
            <AdminIcon />
          </ListItemIcon>
          <ListItemText primary="Administration" />
          {adminOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={adminOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              disablePadding
              onClick={() => handleNavigate('admin', true)}
              selected={path?.includes('/admin')}
              >
              <ListItemButton>
                <ListItemIcon />
                <ListItemText primary="System" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              onClick={() => handleNavigate('masterdata', true)}
              selected={path?.includes('/masterdata')}
              >
              <ListItemButton>
                <ListItemIcon />
                <ListItemText primary="Masterdata" />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
      </List>
      <Divider />
      <List component="nav" aria-label="main hangar pledges administration masterdata settings">
        <ListItem
          disablePadding
          onClick={() => handleNavigate('about')}
          selected={path?.includes('/about')}
          >
          <ListItemButton>
            <ListItemIcon>
              <AboutIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
      </List>
    </React.Fragment>
  )
})