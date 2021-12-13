import React from 'react';
import { observer } from "mobx-react"

import Avatar from '@mui/material/Avatar';

import { StoreContext } from '../../stores/StoreContext';

const ApplicationHeaderAvatar = observer (
  class ApplicationHeaderAvatar extends React.Component {

    stringToColor(string) {
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

    stringAvatar(name) {
      return {
        sx: {
          bgcolor: this.stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
      };
    }

    render() {
        const photoUrl = this.context.authentication.user.photoURL;
        const displayName = this.context.authentication.user.displayName;
        return (
          <React.Fragment>
            { photoUrl ?
              <Avatar src={photoUrl} alt={displayName} {...this.stringAvatar(displayName)}/>
              :
              <Avatar {...this.stringAvatar(displayName)} />
            }

          </React.Fragment>
        )
    }
  }
)


ApplicationHeaderAvatar.contextType = StoreContext;
export default ApplicationHeaderAvatar;