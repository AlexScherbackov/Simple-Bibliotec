<template>
	<div>
		<top-line @callSignForm="callSignForm" @callLogForm="callLogForm"></top-line>
		<popup :isVisible="showPopup">
			<component :is="form" @closeForm="closeForm"></component>
		</popup>
	</div>
</template>

<script>
	import topLine from './topLine.vue';
	import popup from './popup.vue';
	import signForm from './signForm.vue';
	import logForm from './logInForm.vue';

	export default {
		components:{
			popup,
			topLine,
			'signForm': signForm,
			'logForm': logForm
		},
		data(){
			return {
				popupIsVisible: false,
				form: signForm
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
				this.form = 'signForm';
			},
			callLogForm(){
				this.popupIsVisible =  true;
				this.form = 'logForm';
			},
			closeForm(){
				this.popupIsVisible = false;
			}
		},
	}
</script>

<style lang="scss" scoped>


</style>