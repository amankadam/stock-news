import { getStockFromFrontend } from "./get-stock-from-frontend";

export const messageListener = (request, sender, sendResponse) => {
  
  if (!sender.tab) {
    const { action, functionToCall } = request;
    if (action === 'callFunction') {
      const { parameters } = request;
      if (request.bDontWaitForResponse) {
        window[functionToCall].apply(null, parameters);
      } else {
        switch (functionToCall) {
          case 'getStockFromFrontend':
            getStockFromFrontend()
            .then( result => {
              sendResponse(result);
            }).catch(error => {
               console.error(error);
               throw Error(error);
            });
            break;
          default:
            break;
        }
      }
      return true;
    }
  }
  return false;
};