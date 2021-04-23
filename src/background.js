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
    case 'Test':
    console.log('Message From BG',sender,parameters);
    sendResponse('hi');
    break;
    default:
    break;
    }
  }
}
}
browser.runtime.onMessage.addListener(
  messageListener
);
