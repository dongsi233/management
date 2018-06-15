<template>
	<div>
		<transition name="fade">
			<!-- <keep-alive> -->
	        	<router-view></router-view>
			<!-- </keep-alive> -->
	  </transition>
	</div>
</template>
<script type="text/javascript">
	import '@/assets/css/iconfont.css'//加载图标字体
	// import axios from 'axios'

	export default {
		components:{

		},
		data () {
			return {
				isShow:false,
				helloComponent:'',
				isLoadHello:true,
				name:''
			}
		},
		methods: {
			
		}
	}
</script>
<style lang="scss" scoped>	
	// .slide-fade-enter-active {
	//   transition: all .3s ease;
	// }
	// .slide-fade-leave-active {
	//   transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	//   // transition: all .3s linear;
	// }
	// .slide-fade-enter, .slide-fade-leave-active {
	//   transform: translateX(100%);
	//   opacity: 0;
	// }
	.fade-enter-active,
	.fade-leave-active {
		transition: all .2s ease;
	}

	.fade-enter,
	.fade-leave-active {
		opacity: 0;
	}
</style>
