export default (state, action) => {
    switch (action.type) {
        case 'ADD_NEW_QUESTION':
            return {
                ...state,
                cardDatas: [...state.cardDatas, action.payload]
            };
        case 'DELETE_QUESTION':
            return {
                ...state,
                cardDatas: state.cardDatas.filter(cardDatas => cardDatas.id !== action.payload)
            };
        case 'EDIT_CARD':
            return {
                ...state,
                cardDatas: state.cardDatas.map(item => {
                    if (item.id === action.payload.id) {
                        return action.payload;
                    }
                    else {
                        return item;
                    }
                }
                )
            };
        default:
            return state;
    }
}
