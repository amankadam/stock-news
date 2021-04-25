<template>
  <div>
    <div class="logo">
      <h1 class="stockNews">Stock News</h1>
    </div>
    <div class="news-body">
      <ArticleList />
    </div>
  </div>
</template>

<script>
import { sendMessageToContentViaPromise } from "../common/localMessagePassing";
import { tabs } from "../common/getActiveTab";
import { getWebsite } from "@/common/get-website";
import { mapActions, mapGetters } from "vuex";
import ArticleList from "@/components/ArticleList/ArticleList";

export default {
  name: "Index",
  components: {
    ArticleList,
  },
  created() {
    tabs.getCurrent().then((res) => {
      const tab = res && res[0];
      const tabURL = tab.url;
      // const tabTitle = tab.title;
      const website = getWebsite(tabURL);
      if (website) {
        sendMessageToContentViaPromise(
          {
            action: "callFunction",
            functionToCall: "getStockFromFrontend",
          },
          tab.id
        ).then((result) => {
          this.setStock(result);
        });
      }
    });
  },
  computed: {
    ...mapGetters({
      stockName: "stock/stockName",
    }),
    defaultText() {
      return browser.i18n.getMessage("extName");
    },
  },
  methods: {
    ...mapActions({
      getStockNews: "stock/getStockNews",
      setStock: "stock/setStock",
    }),
  },
};
</script>

<style scoped>
@font-face {
  font-family: "OrlegaOne-Regular";
  src: url("https://fonts.googleapis.com/css?family=Bangers");
}
body {
  margin: 0;
  padding: 0;
  background: #f1f1f1;
  font-family: "Montserrat", sans-serif;
  font-size: 65.2%;
}
.logo {
  background-color: #161e28;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 48px;
  width: 100%;
}
.stockNews {
  font-family: "Bangers";
  padding-left: 10px;
  color: whitesmoke;
}
</style>
