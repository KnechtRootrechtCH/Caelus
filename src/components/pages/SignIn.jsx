import React from 'react';
import { observer } from "mobx-react"

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { useContext} from "react"
import { StoreContext } from '../../stores/StoreContext';

export const SignIn = observer (() => {
  const context = useContext(StoreContext)
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <StyledFirebaseAuth uiConfig={context.authentication.uiConfig} firebaseAuth={context.fire.auth()} />
          </Box>
        </Grid>
    </Grid>
  )
})