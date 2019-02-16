import { PROMO_CODE } from './types';

export const applyPromoCode = promoCode => dispatch=>{
    dispatch({
        type: PROMO_CODE,
        payload: promoCode
    });
}