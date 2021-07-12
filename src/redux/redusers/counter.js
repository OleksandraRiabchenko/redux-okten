const initialValue = {
    value: 0
};

export const counterReducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'INC': {
            return {...state, value: state.value + 1}
        }
        default:
            return state
    }
}