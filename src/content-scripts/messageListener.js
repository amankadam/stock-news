export const messageListener = (request, sender, sendResponse) => {
   console.log(request);
  
  if (!sender.tab) {
    const { action, functionToCall } = request;
    if (action === 'callFunction') {
      const { parameters } = request;
      if (request.bDontWaitForResponse) {
        window[functionToCall].apply(null, parameters);
      } else {
        switch (functionToCall) {
          case 'getStockFromFrontend':
            sendResponse('hey');
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