import React, { useState } from 'react';
import EventFocus from '../events/EventFocus';
import EventStream from '../events/EventStream'
import '../../../resources/css/event.css';
export default function EventView() {


    return (
        <React.Fragment>
            <EventStream />
            <EventFocus />
        </React.Fragment>
    );
}

