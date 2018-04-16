<template>
	<div>
		<transition name="slide-fade">
	        <router-view></router-view>
	    </transition>
		<!-- <hello v-show='isShow'></hello> -->
		this is index page
		<a href="cell.html">go to cell page</a><br>
		<a href="useCenter.html">go to userCenter page</a><br>
		<span class="iconfont icon-cart"></span>
		<router-link to='/detail'>go to detail</router-link>
		<router-link to='/login'>go to login</router-link>
		<router-link to='/'>go to home</router-link>
		<button @click='clickMe'>click me</button><br>
		<button @click='clickMe1'>click</button>
		<div class="active"></div>
		
		
		<component :is='helloComponent' v-show='isShow'></component>
	</div>
</template>
<script type="text/javascript">
	import '@/assets/css/iconfont.css'//加载图标字体
	export default {
		components:{

		},
		data () {
			return {
				isShow:false,
				helloComponent:'',
				isLoadHello:true
			}
		},
		methods: {
			clickMe () {
				if (this.isLoadHello) {
					const hello = () =>import('./components/hello.vue');

					this.helloComponent = hello;
					this.isLoadHello = false;
				}
				this.isShow = !this.isShow;
			},
			clickMe1 () {
				
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

	.slide-fade-enter-active {
	  transition: all .3s ease;
	}
	.slide-fade-leave-active {
	  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	  // transition: all .3s linear;
	}
	.slide-fade-enter, .slide-fade-leave-active {
	  transform: translateX(100%);
	  opacity: 0;
	}
</style>
