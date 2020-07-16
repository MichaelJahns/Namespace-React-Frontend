import React from 'react';
import StreamHeader from '../../../components/StreamHeader';

// MUI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


export default function AccountStream(props) {
    return (
        <aside>
            <List>
                <StreamHeader header="Campaigns" />
                <ListItem> My Campaigns </ListItem>
                <Divider />
                <ListItem> Browse </ListItem>
                <Divider />
                <ListItem> Other Things Maybe </ListItem>
                <Divider />
            </List>
        </aside>
    )
}