<template>
	<div>
		<hello v-show='isShow'></hello>
		this is index page
		<a href="cell.html">go to cell page</a>
		<button @click='clickMe'>click me</button>
		<div class="active"></div>
	</div>
</template>
<script type="text/javascript">
	import hello from './components/hello'
	export default {
		components:{
			hello
		},
		data () {
			return {
				isShow:false
			}
		},
		methods: {
			clickMe () {
				this.isShow = true;

			}
		}
	}
</script>
<style lang="scss" scoped>	

	@media all and (min-width: 100px) {
		@import './index.scss';

		.active {
			background: #ddd;
		}	
	}


	.active {
		width: 200px;
		height: 200px;
	}
</style>
