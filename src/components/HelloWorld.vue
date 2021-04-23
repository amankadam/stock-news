<template>
  <div>
    <p>{{ defaultText }}</p>
  </div>
</template>

<script>
import { sendMessageToContentViaPromise , sendMessageToBackgroundScript } from '../common/localMessagePassing';
import { tabs } from '../common/getActiveTab';
export default {
  name: 'HelloWorld',
  mounted () {
    sendMessageToBackgroundScript({
      action: 'callAPI',
      functionToCall: 'Test'
    }).then(result =>  console.log(result)).catch(e=> console.log(e));

  },
  created(){
     tabs.getCurrent().then(res => {
      const tab = res && res[0];
      // const tabURL = tab.url;
      // const tabTitle = tab.title;

      sendMessageToContentViaPromise({
        action:'callFunction',
        functionToCall: 'check'
      },tab.id
      ).then(result => console.log('cont',result)).catch(e=>console.log(e));
     });
  },
  computed: {
    defaultText () {
      return browser.i18n.getMessage('extName')
    }
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
