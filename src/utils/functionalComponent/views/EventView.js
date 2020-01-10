import React, { useState } from 'react';
import FormButton from '../../../components/FormButton';
import EventFocus from '../events/EventFocus';
import EventStream from '../events/EventStream'
import useTracery from '../../useTracery';
import restingPlace from '../../../resources/events/importantPlace/restingPlace'

export default function EventView() {
    const {
        one,
        two,
        three,
        resetGrammars } = useTracery(restingPlace);

    return (
        <div>
            <EventStream />
            < EventFocus
                one={one}
                two={two}
                three={three} />
            < FormButton
                name='Reshuffle'
                onClick={resetGrammars} />
        </div>
    );
}

