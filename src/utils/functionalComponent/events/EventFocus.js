import React, { useState, useEffect, useCallback } from "react";
import useTracery from '../../useTracery';
import restingPlace from '../../../resources/events/importantPlace/restingPlace';
import FormButton from '../../../components/FormButton';
import EventCard from './EventCard';

import '../../../resources/css/cardEffects.css';

export default function EventFocus(props) {
    const [cards, setCards] = useState([]);
    const {
        stories,
        resetGrammars } = useTracery(restingPlace);

    const cardGenerator = useCallback(
        (stories) => {
            let eventType = 'restingPlace';
            let cards = [];
            for (let i = 0; i < stories.length; i++) {
                cards.push(
                    <EventCard
                        key={i}
                        iteration={i}
                        eventType={eventType}
                        story={stories[i]}
                    />
                )
            }
            return cards;
        }, []);

    useEffect(() => {
        const cards = cardGenerator(stories)
        setCards(cards);
    }, [stories, cardGenerator]);

    return (
        <section>
            <div className="cardField">
                {cards}
                < FormButton
                    name='Reshuffle'
                    onClick={resetGrammars} />
            </div>



        </section>
    );
}
