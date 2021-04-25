import { getWebsite } from "../common/get-website";

export const getStockFromFrontend = () => {
    return new Promise((resolve,reject)=> {
       const SELECTORS = getWebsite();
       const stockName = document.querySelector(SELECTORS.STOCK_NAME_SELECTOR).innerText;
       if( stockName ) {
       resolve(stockName);
       } else {
        reject('STOCK NAME NOT FOUND');
       }
    });
}