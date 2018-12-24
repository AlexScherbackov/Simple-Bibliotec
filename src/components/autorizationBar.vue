<template>
	<nav class="autorization ">
		<ul class="autorization__list list">
			<li class="autorization__list-item">
				<el-button 
				class="autorization__btn"
				@click="callLogForm"
				>
				Log in
			</el-button>
		</li>
		<li class="autorization__list-item autorization__list-item--bg-blue">
			<el-button 
			type="primary" 
			class="autorization__btn"
			@click="callSignForm"
			>
			Sign in
		</el-button>
	</li>
</ul>
</nav>

</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			
			callSignForm(){
				this.$emit('callSignForm');
			},
			callLogForm(){
				this.$emit('callLogForm');
			}
		}
	}
</script>

<style lang="scss" scoped>

.autorization__btn{
	font-size: 16px;
	letter-spacing: 0.8px;
	
}

</style>