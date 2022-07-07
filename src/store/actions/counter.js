import { ENCREASE_COUNT, DECREASE_COUNT } from '../types';

export const increase = () => {
    return {
        type:ENCREASE_COUNT,
    }
}

export const decrease = () => {
    return {
        type:DECREASE_COUNT,
    }
}