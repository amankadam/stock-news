import { messageListener } from './messageListener';
console.log('giiii');
chrome.runtime.onMessage.addListener(messageListener);
