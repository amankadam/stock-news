<template>
  <div>
    <p>{{ defaultText }}</p>
  </div>
</template>

<script>
import { sendMessageToContentViaPromise } from '../common/localMessagePassing';
import { tabs } from '../common/getActiveTab';
import { getWebsite } from '@/common/get-website';
import { mapActions , mapGetters} from 'vuex';
export default {
  name: 'Index',
  created(){
     tabs.getCurrent().then(res =>{
      const tab = res && res[0];
      const tabURL = tab.url;
      // const tabTitle = tab.title;
      const website = getWebsite(tabURL);
      if( website ){
       sendMessageToContentViaPromise({
        action:'callFunction',
        functionToCall: 'getStockFromFrontend'
      },tab.id).then(result =>{
      console.log(result);
         this.setStock('NEw');
      });
      }
     });
  },
  computed: {
    ...mapGetters({
       stockName: "stock/stockName"
    }),
    defaultText () {
      return browser.i18n.getMessage('extName')
    }
  },
  methods: {
    ...mapActions({
      getStockNews: 'stock/getStockNews',
      setStock: 'stock/setStock'
    })
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
