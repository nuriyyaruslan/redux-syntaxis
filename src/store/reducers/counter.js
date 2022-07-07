import { ENCREASE_COUNT, DECREASE_COUNT } from '../types';

const default_state = 0;

const reducer = (state = default_state,action) => {
    switch (action.type) {
        case ENCREASE_COUNT:
            return state + 1;
            break;
        case DECREASE_COUNT:
            return state - 1;
            break;
        default:
            return state;
    }
}

export default reducer;