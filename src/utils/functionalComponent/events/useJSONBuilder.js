import React, { useCallback, useState, useEffect } from 'react';
//JSON
import locations from '../../../resources/events/parameters/locations';
import naturalFeatures from '../../../resources/events/parameters/naturalFeatures';

export default function useJSONBuilder(props) {
    const [parameters, setParameters] = useState({});

    const buildFormFieldsFromJSON = useCallback(
        () => {
            const formFieldObj = {
                ...parameters,
                locations: locations,
                naturalFeatures: naturalFeatures
            };
            setParameters(formFieldObj);
            return formFieldObj;
        })

    useEffect(() => {
        const formFields = buildFormFieldsFromJSON();
    }, []);
    return {
        parameters
    }

}