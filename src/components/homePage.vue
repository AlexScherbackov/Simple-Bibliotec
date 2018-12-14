<template>
	<div>
		<top-line @callSignForm="callSignForm"></top-line>
		<popup :isVisible="showPopup">
			<sign-form @closeSignForm="closeSignForm"></sign-form>
		</popup>
	</div>
</template>

<script>
	import topLine from './topLine.vue';
	import popup from './popup.vue';
	import signForm from './signForm.vue';

	export default {
		components:{
			popup,
			topLine,
			signForm
		},
		data(){
			return {
				popupIsVisible: false
			}
		},
		computed:{
			showPopup(){
				return this.popupIsVisible
			}
		},
		methods: {
			callSignForm(){
				this.popupIsVisible =  true;
			},
			closeSignForm(){
				this.popupIsVisible = false;
			}
		},
	}
</script>

<style lang="scss" scoped>


</style>