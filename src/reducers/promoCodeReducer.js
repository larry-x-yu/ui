import { PROMO_CODE } from '../actions/types';

export default function(state, action) {
    switch(action.type) {
        case PROMO_CODE:
        return {
            ...state,
            promoCode: action.payload
        }
        default:
            return state;
    }
}