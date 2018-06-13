<template>
	<el-row class="container">
		<el-row class="header">
			<el-col :span="isCollapse?1:4">{{ isCollapse ? "":"系统管理" }}</el-col>
			<el-col :span="5">
				<el-button type="text" @click="showSider(3)">
					<i class="iconfont icon-folder" style="color:#fff"></i>
					{{ getCount + getRoutesLength }}
				</el-button>
			</el-col>
			<el-col :span="12">
				<el-input v-model="count" placeholder=""></el-input>
				
			</el-col>
		</el-row>
		<el-row class="main">
			<aside>
				<el-menu mode="vertical" class="menu-collapse" :default-active="$route.path" @select="handleSelect" router unique-opened :collapse="isCollapse">
					<el-submenu v-for="(submenus, index) in $router.options.routes"
						:index="index + ''"
						:key="submenus.index" v-if="!submenus.hidden">
						<template slot="title"><i :class="submenus.icon" class="submenu_icon"></i>{{ submenus.name }}</template>
						<el-menu-item v-for="(item, subIndex) in submenus.children"
							:index="item.path" :key="item.path" :class="subIndex == submenus.children.length-1?'': 'submenuClass'">
								{{item.name}}
						</el-menu-item>
					</el-submenu>
				</el-menu>
				
			</aside>
			<section>
				<router-view/>
			</section>
		</el-row>
		
	</el-row>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
	data () {
		return {
			isCollapse:false,
			aa:'ccc'
		}
	},
	beforeCreate () {
		console.log(this.$router);
		console.log(this.$route);
		console.log(this.$router.options.routes);
	},
	computed:{
		getCount () {
			return this.aa
		},
		// ...mapState({
		// 		count: state => state.count
		// })
		...mapState([
			'count'
		]),
		...mapGetters([
			'getRoutesLength'
		]),
		
	},
	methods: {
		showSider (n) {
			debugger;
			this.isCollapse = !this.isCollapse;
			//this.addCount(n);
			// this.$store.dispatch({
			// 	type: 'incrementAsync',
			// 	n
			// });
			this.$store.dispatch('incrementAsync', {
				amount:n
			})
			// this.$http.post('',{}).then( res => {
			// 	console.log(res)
			// })
		},
		handleSelect (index, indexPath)　{
			console.log(indexPath);
			console.log(index);
		},
		...mapMutations({
			addCount:'increment'
		}),
		...mapActions([
			'incrementAsync'
		])
	}
}
</script>
<style lang="scss" scoped>
	//@import '~commonCss';
	@import '~vars';

	.submenuClass {
		border-bottom: 1px solid #ddd;
	}

	.menu-collapse:not(.el-menu--collapse) {
    width: 200px;
    
	}
	
	.container {
		.header {
			background:$blueColor;
			//line-height: 34px;
			display: flex;
			
			color: $fontWhite;
			padding:0 20px;
			div {
				align-self: center;
			}
		}
	
	.main {
		display: flex;
		aside {
			overflow: hidden;
			.submenu_icon {
				font-size: 25px;
				margin-right: 20px;
			}
			//flex:0 0 200px;
		}
	}
	}
</style>
