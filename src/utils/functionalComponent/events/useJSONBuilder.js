import { useCallback, useState, useEffect } from 'react';
//JSON
import locations from '../../../resources/events/parameters/locations';
import naturalFeatures from '../../../resources/events/parameters/naturalFeatures';

export default function useJSONBuilder(props) {
    const [parameters, setParameters] = useState({});

    const buildFormFieldsFromJSON = useCallback(
        () => {
            console.log('loop')
            const formFieldObj = {
                locations: locations,
                naturalFeatures: naturalFeatures
            };
            setParameters(formFieldObj);
        }, [])

    useEffect(() => {
        buildFormFieldsFromJSON();
    }, [buildFormFieldsFromJSON]);
    return {
        parameters
    }

}