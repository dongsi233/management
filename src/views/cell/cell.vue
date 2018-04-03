<template>
	<div>
		
		this is cell page
		<a href="index.html" :class='[$style.red, $style.bold]'>go to index</a><br>
		<a href="#" :class="{ [$style.red]: isRed, [$style.bold]: isBold }">nothing</a>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				isRed: true,
				isBold: false
			}
		},
		created () {
			console.log(this.$style.red);
		}
	}
</script>
<style type="scss" rel="styleSheet/sass">
	
</style>
<style module>
	.red {
		color:red;
	}

	.bold {
		font-weight: bold;
	}
</style>