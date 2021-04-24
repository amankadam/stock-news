import { messageListener } from './messageListener';
chrome.runtime.onMessage.addListener(messageListener);
