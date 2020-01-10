import React, { useState } from 'react';
import FormButton from '../../../components/FormButton';
import EventFocus from '../events/EventFocus';
import EventStream from '../events/EventStream'

export default function EventView() {


    return (
        <React.Fragment>
            <EventStream />
            <EventFocus />
        </React.Fragment>
    );
}

