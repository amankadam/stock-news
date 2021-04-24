import { SITES } from './constants';
export const getWebsite = tabURL => {
    if(new RegExp(SITES.PAYTM_MONEY).test(tabURL)){
        return SELECTORS.PAYTM_MONEY;
    }
    return false;
}

export const SELECTORS = {
    PAYTM_MONEY:{}
}