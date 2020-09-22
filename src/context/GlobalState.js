import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    cardDatas: [
        { id: 1, question: "what is php", answer: "Programming language" },
        { id: 2, question: "what is js", answer: "Scripting language" }
    ]
}

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //action
    const addQuestion = (cardData) => {
        dispatch({
            type: "ADD_NEW_QUESTION",
            payload: cardData
        });
    }

    const deleteQuestion = (id) => {
        dispatch({
            type: "DELETE_QUESTION",
            payload: id
        });
    }

    return (<GlobalContext.Provider value={{
        cardDatas: state.cardDatas,
        addQuestion,
        deleteQuestion
    }}>

        {children}

    </GlobalContext.Provider>

    )
}
