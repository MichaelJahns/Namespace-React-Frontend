import React, { useState, useEffect } from "react";
import useTracery from '../../useTracery';
import restingPlace from '../../../resources/events/importantPlace/restingPlace';
import FormButton from '../../../components/FormButton';

import '../../../resources/css/cardEffects.css';

export default function EventFocus(props) {
    const [cards, setCards] = useState([]);
    const {
        stories,
        resetGrammars } = useTracery(restingPlace);

    const cardGenerator = ((story, iteration) => {
        let eventType = "restingPlace";
        let card =
            <div class={"eventCard " + eventType} id={"card" + iteration}>
                <div class="image" id="i2">
                    <div class="city">
                        <p> {iteration} </p>
                    </div>
                </div>
                <div class={`story ` + eventType} id={"story" + iteration}>
                    <div class="info">
                        <h3> Resting Place </h3>
                        <p> {story} </p>
                    </div>
                </div>
            </div>
        return card;
    });

    useEffect(() => {
        let cards = [];
        for (let i = 0; i < stories.length; i++) {
            cards.push(cardGenerator(stories[i], i));
        }
        setCards(cards);
    }, [stories]);




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
