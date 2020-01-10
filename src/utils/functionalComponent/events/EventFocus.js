import React from "react";
import useTracery from '../../useTracery';
import restingPlace from '../../../resources/events/importantPlace/restingPlace';
import FormButton from '../../../components/FormButton';


export default function EventFocus(props) {
    const {
        one,
        two,
        three,
        resetGrammars } = useTracery(restingPlace);

    return (
        <section>
            <div>
                <p> {one} </p>
                <p> {two} </p>
                <p> {three} </p>
            </div>

            < FormButton
                name='Reshuffle'
                onClick={resetGrammars} />
        </section>
    );
}
