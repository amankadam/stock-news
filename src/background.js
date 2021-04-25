import { getStockNews } from "./services/news.api";
global.browser = require('webextension-polyfill');

const messageListener = (request,sender,sendResponse) => {
  const { action, functionToCall, parameters } = request;
  if (request.bDontWaitForResponse) {
    window[functionToCall].apply(
      null,
      parameters
    );
  } else {
    if (action == 'callAPI') {
      switch (functionToCall) {
        case 'getStockNews':
          getStockNews(parameters)
            .then(result => {
              sendResponse(result.data.articles);
            })
            .catch(error => {
              console.error(error);
            });
          break;
        default:
          break;
      }
      return true;
    }
    return false;
  }
}
browser.runtime.onMessage.addListener(
  messageListener
);
