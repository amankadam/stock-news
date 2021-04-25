<template>
    <div class="news-card">
	<div class="meta">
		<div class="img" :style="{'background-image': 'url('+ article.media +')'}"></div>
	</div>
	<div class="description">
		<h2>{{article.title}}</h2>
		<p>{{article.summary.substring(0,225) + '...'}}</p>
		<p class="read-more">
			<a :href="article.link" target="_blank">Read More</a>
		</p>
	</div>
</div>
</template>
<script>

export default ({
    name: 'ArticleCard',
   props: {
       article: Object
   },
})
</script>

<style lang="css" scoped>
@import './ArticleCard.css';
</style>