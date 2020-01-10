import React from 'react';
import AccountFocus from '../accounts/AccountFocus';
import AccountStream from '../accounts/AccountStream';

export default function AccountView() {

    return (
        <React.Fragment>
            <AccountStream />
            <AccountFocus />
        </React.Fragment>
    );
}

