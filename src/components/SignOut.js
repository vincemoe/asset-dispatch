import React from 'react';
import { Button } from 'reactstrap';

import {auth} from '../firebase';

const SignOutButton = (() =>
    <Button
        type="button"
        onClick={auth.doSignOut}
        color="danger"
    >Sign Out
    </Button>);

export default SignOutButton;