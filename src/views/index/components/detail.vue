<template>
	<div>
		this is detail page
		<router-link to='/detail' active-class='link-class' exact>detail1.html1</router-link>
		<router-link to='/detail/detail2' active-class='link-class'>detail1.html2</router-link>
		<button @click='change'>change</button>
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		methods: {
			change () {
				console.log(this.$route);

			}
		},
		watch : {
			'$route' (to, from) {
			     
			}
		}
	}
</script>
<style lang='scss'>
	.link-class {
		border:1px solid #ddd;
		padding:5px;
	}
</style>