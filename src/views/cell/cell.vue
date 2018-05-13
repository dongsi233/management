<template>
	<div>
		
		this is cell page
		<!-- <a href="index.html" :class='[$style.red, $style.bold]'>go to index</a><br>
		<a href="#" :class="{ [$style.red]: isRed, [$style.bold]: isBold }">nothing</a> -->

	    <swiper :options="swiperOption">
	        <swiper-slide v-for="slide in swiperSlides">
	        	I'm Slide {{ slide.value }}
				<img :src='slide.img'>
	        </swiper-slide>
	        <div class="swiper-pagination" slot="pagination"></div>
	    </swiper>
		<img src="./logo.png"> 
		<div class="img" ></div>
		<div class="img2" ></div>

		<hello></hello>
	</div>
</template>
<script type="text/javascript">
	import Vue from 'vue'
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'


	// new Vue({
	// 	components: {
	// 		hello : () => import('views/index/components/hello.vue')
	// 	}
	// })
	
	// Vue.component(
	// 	'hello', 
	// 	() => import('views/index/components/hello.vue')
	// )

	// const hello = () => ({
	// 	component: import('views/index/components/hello.vue'),
	// 	delay: 2000,
	// 	timeout: 3000
	// })

	export default {
		// data () {
		// 	return {
		// 		isRed: true,
		// 		isBold: false
		// 	}
		// },
		// created () {
		// 	console.log(this.$style.red);
		// }.
		components: {
		    swiper,
		    swiperSlide,
		    
		    hello: () => import('views/index/components/hello.vue').then(component => {
		    	// 清理已缓存的组件定义
  	      component.default._Ctor = {}

  	      if (!component.default.attached) {
  	        // 保存原组件中的 created 生命周期函数
  	        component.default.backupCreated = component.default.created
  	      }

  	      // 注入一个特殊的 created 生命周期函数
  	      component.default.created = function() {
  	        // 子组件已经实例化完毕

  	        // this 即为子组件 vm 实例
  	        console.log(this)

  	        if (component.default.backupCreated) {
  	          // 执行原组件中的 created 生命周期函数
  	          component.default.backupCreated.call(this)
  	        }
  	      }

  	      // 表示已经注入过了 
  	      component.default.attached = true
		    	return component
		    })
		},
	    data() {
	      return {
	        swiperOption: {
	          pagination: {
	            el: '.swiper-pagination'
	          },
	          autoplay:true,
	          loop:true
	        },
	        swiperSlides: [
	        //图片等资源路径为变量注入到dom结构时，需要用绝对地址，或者用一下require模式引用
	        	{value:1,img:require('./logo.png')},
	        	{value:2,img:require('./logo.png')},
	        	{value:3,img:require('./logo.png')},
	        	{value:4,img:require('./logo.png')},
	        	{value:5,img:require('./logo.png')}
	        ],
	        // bg:require('./logo.png')
	      }
	    },
	    mounted() {
	      
	    }    
	}
</script>
<style type="scss" rel="styleSheet/sass">
	.img, .img2 {
		width: 300px;
		height: 300px;
		background: url('./logo.png') no-repeat center center;
		/*background-image: url('./logo.png') ;*/
	}

	.img2 {
		background-image: url('./panda.jpg');
		
	}

	.my-swiper {
	    height: 300px;
	    width: 100%;
	    .swiper-slide {
	      text-align: center;
	      font-size: 38px;
	      font-weight: 700;
	      background-color: #eee;
	      display: flex;
	      justify-content: center;
	      align-items: center;
	    }
	    .swiper-pagination {
	      > .swiper-pagination-bullet {
	        background-color: red;
	      }
	    }
	  }
</style>
<style module>
	
	/*.red {
		color:red;
	}

	.bold {
		font-weight: bold;
	}*/

	
</style>