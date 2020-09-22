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
        default:
            return state;
    }
}
