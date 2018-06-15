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
			<!-- <el-col :span="12">
				<el-input v-model="count" placeholder=""></el-input>
				
			</el-col> -->
			<el-col :span="5">
				<el-dropdown trigger="hover" @command="drophandle">
					<!-- <span class="portrait">
						
					</span> -->
					<el-button circle>下拉</el-button>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item v-for="item in items"
							:key="item.key" :command="item.command" :divided="true">
							{{item.title}}
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-button type="primary" @click="cancellation">退出</el-button>
				
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
		
	</el-row>
	
	
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

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
			]
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
			.portrait {

			}
		}
	}
</style>
