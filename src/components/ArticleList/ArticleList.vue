<template>
  <div v-if="articles && articles.length > 0">
    <div v-for="(article, index) in articles" :key="index">
      <ArticleCard :article="article" />
    </div>
  </div>
  <div v-else>Loading....</div>
</template>
<script>
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import { mapGetters } from "vuex";
export default {
  name: "ArticleList",
  components: {
    ArticleCard,
  },
  computed: {
    ...mapGetters({
      articles: "stock/stockRelatedArticles",
    }),
  },
};
</script>

