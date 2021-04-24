const messageListener = ( request, sender, sendResponse) => {
  const { action, functionToCall, parameters } = request;
  if (request.bDontWaitForResponse) {
            window[functionToCall].apply(
                null,
                parameters
            );
  } else {
  if( action == 'callAPI'){
    switch(functionToCall) {
    case 'getStockNews': 
    console.log('getNews');
    sendResponse([]);
    default:
    break;
    }
  }
}
}
browser.runtime.onMessage.addListener(
  messageListener
);
