const onResponseHandler = (response, resolve, reject) => {
  if (response && !response.error) {
    resolve(response);
  } else {
    reject(response);
  }
};

export const sendMessageToContentViaPromise = (oRequestBody, tabId) => {
  return new Promise((resolve, reject) => {
    console.log(tabId);
    if (tabId) {
      browser.tabs.sendMessage(tabId, oRequestBody).then(response => {
        console.log(tabId);
        onResponseHandler(response, resolve, reject);
      });
    } else {
      resolve({
        isError: true,
        message: 'tab id not valid',
      });
    }
  });
};
export const sendMessageToBackgroundScript = oRequestBody => {
  return new Promise((resolve, reject) => {
    if (!browser.runtime.lastError) {
      browser.runtime
        .sendMessage(oRequestBody)
        .then(response => onResponseHandler(response, resolve, reject))
        .catch(response => onResponseHandler(response, resolve, reject));
    }
  });
};