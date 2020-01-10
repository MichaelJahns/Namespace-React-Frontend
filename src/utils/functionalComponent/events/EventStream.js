import React from 'react';
import StreamHeader from '../../../components/StreamHeader';
import CheckBoxForm from '../../../components/Forms/CheckboxForm';
import refineEvents from '../events/refineEvents';

export default function EventStream(props) {
    const { expanded, handleNearbyChange, handleLocationChange } = refineEvents();
    const _handleClassNames = (event) => {
        console.log(event.target.className)
        let className = "selectable"
        return className;
    }
    return (
        <aside className="eventStream">
            <ul>
                <StreamHeader header="Events" />
                <CheckBoxForm
                    category="locations"
                    classes={_handleClassNames}
                    expanded={expanded.locations}
                    onChange={handleLocationChange}
                />
                <CheckBoxForm
                    category="nearby"
                    classes={_handleClassNames}
                    expanded={expanded.nearby}
                    onChange={handleNearbyChange}
                />

            </ul>
        </aside>
    )
}