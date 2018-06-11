<template>
	<el-form class="login_container" label-width="60px" ref="loginForm1" :model="loginForm" :rules="rules">
		<h3>系统登陆</h3>
		<el-form-item label="账号" prop="userName">
			<el-input placeholder="请输入账号" v-model="loginForm.userName" prefix-icon="iconfont icon-cart"></el-input>
		</el-form-item>
		<el-form-item label="密码" prop="pwd">
			<el-input placeholder="请输入密码" v-model="loginForm.pwd" prefix-icon="iconfont icon-password" type="password"></el-input>
		</el-form-item>
		<el-form-item>
			<!-- <el-checkbox v-model="isRemember">记住我的选择</el-checkbox> -->
		</el-form-item>
		<el-button :loading="isLoding" type="primary" class="login_button" @click="userLogin">登陆</el-button>
	</el-form>
	
</template>
<script type="text/javascript">
	
	import '@/assets/css/iconfont.css';
	export default {
		data () {
			let checkUser = (rule, value, callback) => {
				var reg = /[a-zA-Z]+/;
				if (!value) {
					callback(new Error("不能为空！"));
				}else if (!reg.test(value)) {
					callback(new Error('格式不对！'));
				}else {
					callback();
				}
			};
		    return {
				isLoding: false,
				isRemember: false,
				loginForm: {
					userName:"",
					pwd: ""
				},
				rules:{
					userName: [
						{validator: checkUser, trigger: 'blur'}
						// {required: true, message: '请输入用户名', trigger: 'blur'}
					],
					pwd: [
						{required: true, message: '请输入密码', trigger: 'blur'},
						{min: 6, max: 12, message: '密码长度不对', trigger: 'blur'}
					],
					
				}
			}
		},
		methods: {
			userLogin () {
				this.isLoding = true;
				this.$refs.loginForm1.validate((valid) => {
					if (valid) {
						this.$router.push('/');
					} else {
						this.isLoding = false;
					}
				})
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