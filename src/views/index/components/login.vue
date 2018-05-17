<template>
	<el-form class="login_container" label-width="40px">
		<h3>系统登陆</h3>
		<el-form-item label="账号">
			<el-input placeholder="请输入账号" prefix-icon="iconfont icon-cart"></el-input>
		</el-form-item>
		<el-form-item label="密码">
			<el-input placeholder="请输入密码" prefix-icon="iconfont icon-password" type="password"></el-input>
		</el-form-item>
		<el-form-item>
			<el-checkbox v-modal="isRemember">记住我的选择</el-checkbox>
		</el-form-item>
		<el-button :loading="isLoding" type="primary" class="login_button">登陆</el-button>
	</el-form>
</template>
<script type="text/javascript">
	import '@/assets/css/iconfont.css';
	export default {
		data () {
			return {
				isLoding: false,
				isRemember: false,
			}
		}
	}
</script>
<style lang="scss" scoped>
	

	.login_container {
		margin:180px auto;
		border:1px solid #ddd;
		border-radius:5px;
		width: 350px;
		padding: 35px 35px 15px 35px;

		h3 {
			text-align: center;
		}

		.login_button {
			width:100%;
		}
	}
</style>