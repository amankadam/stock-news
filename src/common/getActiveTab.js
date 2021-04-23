export const tabs = {
  getCurrent: () => {
    return tabs.queryTabs({
    active: true,
    lastFocusedWindow: true,
});
  },
  queryTabs: queryInfo => {
    return new Promise((resolve, reject) => {
      browser.tabs.query(queryInfo).then(arrTabs => {
        if (browser.runtime.lastError) {
          reject(browser.runtime.lastError.message);
          return;
        }
        resolve(arrTabs);
      });
    });
  },
}