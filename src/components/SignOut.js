import React from 'react';

import {auth} from '../firebase';

import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const SignOutButton = (() =>
    /*<button
        type="button"
        onClick={auth.doSignOut}
    >Sign Out
    </button>)*/
    <MuiThemeProvider>
        <MenuItem primaryText="Sign Out" onClick={auth.doSignOut}/>
    </MuiThemeProvider>);

export default SignOutButton;