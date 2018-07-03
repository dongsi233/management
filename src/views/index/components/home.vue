<template>
	<!-- <el-row class="container">
		<el-row class="header">
			<el-col :span="isCollapse?1:4">{{ isCollapse ? "":"系统管理" }}</el-col>
			<el-col :span="5">
				<el-button type="text" @click="toggleSiderbar">
					<i :class="isCollapse ? 'el-icon-d-arrow-right':'el-icon-d-arrow-left'" style="color:#fff"></i>
				</el-button>
			</el-col>
			<el-col :span="5">
				<el-dropdown trigger="hover" @command="drophandle">
					
					<el-button circle>下拉</el-button>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item v-for="item in items"
							:key="item.key" :command="item.command" :divided="true">
							{{item.title}}
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-row>
		<el-row class="main">
			<aside>
				<el-menu mode="vertical" class="menu-collapse" :default-active="$route.path" @select="handleSelect" router unique-opened :collapse="isCollapse">
					<el-submenu v-for="(submenus, index) in currentData"
						:index="index + ''"
						:key="submenus.index" v-if="!submenus.hidden">
						<template slot="title"><i :class="submenus.icon" class="submenu_icon"></i>{{ submenus.title }}</template>
						<el-menu-item v-for="(item, subIndex) in submenus.children"
							:index="item.path" :key="item.path" :class="subIndex == submenus.children.length-1?'': 'submenuClass'">
								{{item.title}}
						</el-menu-item>
					</el-submenu>
				</el-menu>
				
			</aside>
			<section>
				<router-view></router-view>
			</section>
		</el-row>
		
	</el-row> -->
	<el-container>
		<div class="siderbar">
			<el-menu mode="vertical" background-color="#304156" text-color="#fff" active-text-color="#409EFF" :default-active="$route.path" class="el-menu-vertical-demo" @select="handleSelect" router unique-opened :collapse="isCollapse">
				<el-submenu v-for="(submenus, index) in currentData"
					:index="index + ''"
					:key="submenus.index" v-if="!submenus.hidden">
					<template slot="title"><i :class="submenus.icon"></i>{{ submenus.title }}</template>
					<el-menu-item v-for="item in submenus.children"
						:index="item.path" :key="item.path" >
							{{item.title}}
					</el-menu-item>
				</el-submenu>
			</el-menu>
		</div>
		<el-main>
			<el-header>
				<el-button type="primary" @click="toggleSiderbar">
					<i :class="isCollapse ? 'el-icon-d-arrow-right':'el-icon-d-arrow-left'" style="color:#fff"></i>
				</el-button>
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<transition-group name="el-fade-in-linear">
						<el-breadcrumb-item v-for="item in breadCrumbList" :key='item.path' >
							{{ item.name }}
						</el-breadcrumb-item>
					</transition-group>	
				</el-breadcrumb>
				
			</el-header>
			<el-container>
				<router-view></router-view>
			</el-container>
			
		</el-main>
	</el-container>
	
	
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { isContext } from 'vm';

export default {
	data () {
		return {
			isCollapse:false,
			aa:'ccc',
			user:'',
			currentData:[],
			items: [
				{title:'注销', command: 'cancellation'},
				{title:'我的账号', command: 'account'},
			],
			breadCrumbList: null
		}
	},
	beforeCreate () {
		console.log(this.$router);
		console.log(this.$route);
		console.log(this.$router.options.routes);
	},
	created () {
		this.user = sessionStorage.getItem('user');
		this.currentData = JSON.parse(sessionStorage.getItem('routeDatas'));
		console.log(this.currentData);
		this.getBreadcrumb();
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
	watch : {
		$route () {
			this.getBreadcrumb();
		}
	},
	methods: {
		showSider (n) {
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
		]),
		toggleSiderbar () {
			this.isCollapse = !this.isCollapse;
		},
		drophandle (command) {
			//this.$alert(command);
			if(command === 'cancellation') {
				this.$alert("确定要注销吗？", "注销", {
					confirmButtonText: '注销',
					callback: (action) => {
						if(action === 'confirm') {
							sessionStorage.removeItem('user');
							sessionStorage.removeItem('routeDatas');
							this.$router.push('/login');
						}
					}
				})
			}
		},
		getBreadcrumb () {
			let match = this.$route.matched.filter( item => item.name )
			match = [{path: '/', name:'首页'}].concat(match)
			this.breadCrumbList = match
		}
	},
	beforeRouteLeave (to, from, next) {
		//console.log(to);
		next();
	}
}
</script>
<style lang="scss" scoped>
	//@import '~commonCss';
	@import '~vars';
	.siderbar {
		overflow: hidden;
		i {
			font-size: 1em;
			margin-right: 25px;
		}
	}
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
	}
	.el-menu-vertical-demo .el-menu-collspse {
		width: 40px;
	}
	.el-main {
		padding:0;
		.el-header {
			background: #fff;
			color:#333;
			padding-left: 0;
			display: flex;
			align-items: center;	
		}
	}
</style>
