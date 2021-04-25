import { SITES } from './constants';
export const getWebsite = url => {
    const tabURL = url || window.location.href;
    if(new RegExp(SITES.PAYTM_MONEY).test(tabURL)){
        return SELECTORS.PAYTM_MONEY;
    }
    return false;
}

export const SELECTORS = {
    PAYTM_MONEY:{
        STOCK_NAME_SELECTOR: '._2kvDNKcVwpUJpecmTIZduP'
    }
}