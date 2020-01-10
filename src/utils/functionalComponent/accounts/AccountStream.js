import React from 'react';
import { useAuth } from '../../useAuth';
import StreamHeader from '../../../components/StreamHeader';

export default function AccountStream(props) {
    // TODO: Create Two Stream patterns, one stream with options for authed users, another 
    // stream with non-authed users options
    const { user } = useAuth();
    const authStream =
        <ul>
            <StreamHeader header="Account" />
            <li> Profile </li>
            <li> Settings </li>
        </ul>
    const noAuthStream =
        <ul>
            <StreamHeader header="Namespace" />
            <li> Login </li>
        </ul>
    return (
        <aside>
            {user ?
                authStream
                :
                noAuthStream}
        </aside >
    )
}