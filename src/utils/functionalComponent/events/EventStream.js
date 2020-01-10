import React from 'react';
import StreamHeader from '../../../components/StreamHeader';


export default function EventStream(props) {
    return (
        <aside>
            <ul>
                <StreamHeader header="Events" />
                <li> Chance Encounter </li>
                <li> Important Place </li>
            </ul>
        </aside>
    )
}