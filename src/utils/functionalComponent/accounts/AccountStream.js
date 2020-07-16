import React from 'react';
import { useAuth } from '../../useAuth';
import StreamHeader from '../../../components/StreamHeader';

// MUI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { signout } from './../../useAuth';

export default function AccountStream(props) {
    // TODO: Create Two Stream patterns, one stream with options for authed users, another 
    // stream with non-authed users options

    const { signout } = useAuth();

    return (
        <aside>
            <List>
                <StreamHeader header="Account" />
                <ListItem> Profile </ListItem>
                <Divider />
                <ListItem> Settings </ListItem>

                <Divider />
                <ListItem onClick={() => signout()}> Log Out </ListItem>
            </List>
        </aside >
    )
}