import { useCallback, useState, useEffect } from 'react';
//JSON
import locations from '../../../resources/events/parameters/locations';
import naturalFeatures from '../../../resources/events/parameters/naturalFeatures';
import type from '../../../resources/events/parameters/type';

export default function useJSONBuilder(props) {
    const [jsonObject, setJsonObject] = useState({});

    const buildFormFieldsFromJSON = useCallback(
        () => {
            const formFieldObj = {
                locations: locations,
                naturalFeatures: naturalFeatures,
                type: type
            };
            setJsonObject(formFieldObj);
        }, [])

    useEffect(() => {
        buildFormFieldsFromJSON();
    }, [buildFormFieldsFromJSON]);
    return {
        jsonObject
    }

}