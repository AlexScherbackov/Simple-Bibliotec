<template>
	<div class="popup" :class="{'popup--visible': isVisible}">
		<div class="popup__wrapper">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			isVisible: Boolean
		},
		data(){
			return{

			}
		}
	}
</script>

<style lang="scss" scoped>
	.popup{
		display: none;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		background-color: rgba(black, 0.6);
		background-size: 	100%;
		&--visible{
			display: block;
		}
		&__wrapper{
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
			width: 100%;
		}
	}
</style>