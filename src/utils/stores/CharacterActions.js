import React, { useReducer } from 'react';

function reducer(state, action) {

    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state
    }
}

export const CharacterActions = () => {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            count: {count}
            <button onClick={() => dispatch({ type: "INCREMENT" })}> increment </button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}> decrement </button>
        </div>
    )
}