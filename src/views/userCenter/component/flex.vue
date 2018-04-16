<template>
	
	<div class="container">
		<header>
			<nav>
				<ul>
					<li>home</li>
					<li>about</li>
					<li>contact</li>
				</ul>
			</nav>
			<button>login</button>
		</header>

		
		<div class="wrapper">
			<aside class="sidebar">
				<h3></h3>
			</aside>
			<section class="main">
				<h2></h2>
				<p></p>
			</section>
		</div>
		<footer>
			<h3></h3>
			<p></p>
		</footer>
	</div>
</template>
<script>
	import '@/assets/css/common.css';

	export default {
		data () {
			return {

			}
		}
	}
</script>
<style lang='scss' scoped>
	

	.container {
		display: flex;
		flex-direction: column;
	}
	
	header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 40px;
		padding: 15px;

		ul {
			display: flex;
			align-items: baseline;

			li {
				padding:5px 10px;
			}
		}
	}
	
	.wrapper {
		display: flex;
		flex-direction: row;

		.main {
			flex:1;
			margin-right: 60px;
		}

		.sidebar {
			width: 300px;
		}
	}

</style>