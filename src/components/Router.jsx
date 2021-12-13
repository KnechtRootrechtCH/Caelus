import React from 'react';
import { observer } from "mobx-react"
import { useContext} from "react"
import { StoreContext } from '../stores/StoreContext';
import { Routes, Route } from "react-router-dom";

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import Initializing from './Initializing';
import { Layout} from './Layout';

import { About } from './pages/About';
import { Administration } from './pages/Administration';
import { Hangar } from './pages/Hangar';
import { NotFound } from './pages/NotFound';
import { Masterdata } from './pages/Masterdata';
import { Pledges } from './pages/Pledges';
import { Profile } from './pages/Profile';
import { SignIn} from './pages/SignIn';



export const Router = observer (() => {
  const context = useContext(StoreContext);
  const isAdministrator = context.authentication.isAdministrator;
  const theme = context.theme.theme;
  const initialized = context.initialized;
  const authenticated = context.authentication.isAuthenticated;

  if (initialized) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        { authenticated ?
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Hangar />} />
              <Route path="hangar" element={<Hangar />} />
              <Route path="pledges" element={<Pledges />} />
              <Route path="about" element={<About />} />
              <Route path="profile" element={<Profile />} />
              <Route path="admin" element={isAdministrator ? <Administration /> : <NotFound />} />
              <Route path="admin/masterdata" element={isAdministrator ? <Masterdata /> : <NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="signin" element={<SignIn />} />
          </Routes>
        :
          <SignIn />
        }
      </ThemeProvider>
    )
  } else {
    return (
      <Initializing />
    )
  }
})