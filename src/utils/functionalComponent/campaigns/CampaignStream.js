import React from 'react';
import StreamHeader from '../../../components/StreamHeader';

export default function AccountStream(props) {
    return (
        <aside>
            <ul>
                <StreamHeader header="Account" />
                <li> My Campaigns </li>
                <li> Browse </li>
                <li> Other Things Maybe </li>
            </ul>
        </aside>
    )
}