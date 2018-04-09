<template>
	<div>
		<div>this is home page</div>
		<ul>
		  <li v-for="img in list">
		    <img src="" v-lazy="img.src" >
		  </li>
		</ul>
	</div>
</template>
<script>
	import Vue from 'vue'
	import Vuelazyload from 'vue-lazyload'

	Vue.use(Vuelazyload)

	Vue.use(Vuelazyload, {
	  preLoad: 1.3,
	  // error: require('@/assets/image/logo.png'),
	  loading: require('@/assets/image/logo.png'),
	  attempt: 1
	})

	export default {
		data () {
			return {
				list: [
					{src:require('@/assets/image/panda.jpg')},
					{src:require('@/assets/image/panda.jpg')},
					{src:require('@/assets/image/panda.jpg')}
				]
			}
		}
	}
</script>
<style lang='scss'>
	
</style>