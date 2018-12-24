<template>
	<div>
		<top-line @callSignForm="callSignForm" @callLogForm="callLogForm" :autorization="!!user"></top-line>
		<slider></slider>
		<popup :isVisible="showPopup">
			<component :is="form" @closeForm="closeForm"></component>
		</popup>
	</div>
</template>

<script>
	import topLine from './topLine.vue';
	import popup from './popup.vue';
	import signForm from './forms/signForm.vue';
	import logForm from './forms/logInForm.vue';
	import slider from './slider/slider.vue';

	import {mapGetters} from 'vuex';
	export default {
		components:{
			popup,
			topLine,
			'signForm': signForm,
			'logForm': logForm,
			slider
		},
		data(){
			return {
				popupIsVisible: false,
				form: signForm
			}
		},
		computed:{
			...mapGetters({user:'getActualUser'}),
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