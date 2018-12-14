<template>
	<div class="sign-form__wrapper">
		<div class="sign-form__close-btn">
			<span class="sign-form__close-btn-elem" @click="closeSignForm"></span>
		</div>
		<el-row type="flex" justify="center">
			<el-col :span="24">
				<el-form ref="form" :model="formData" label-width="120px" label-position="top" class="sign-form">
					<el-form-item label="Name" >
						<el-input v-model="formData.name"></el-input>
					</el-form-item>
					<el-form-item label="Surname" >
						<el-input v-model="formData.surname"></el-input>
					</el-form-item>
					<el-form-item label="Email" >
						<el-input v-model="formData.email"></el-input>
					</el-form-item>
					<el-form-item label="Password" >
						<el-input v-model="formData.password"></el-input>
					</el-form-item>

					<el-button type="primary" @click="onSubmit">Sign in</el-button>
				</el-form-item>
			</el-form>

		</el-col>
	</el-row>
</div>
</template>

<script>
	export default {
		data(){
			return{
				formData:{
					name: '',
					surname: '',
					email: '',
					password: ''
				}
			}
		},
		methods:{
			onSubmit(){
				console.log(this.formData);
			},
			closeSignForm(){
				this.$emit('closeSignForm');
			}
		}
	}
</script>

<style lang="scss" scoped>
.sign-form{
	min-width: 290px;
	background-color: #fff;
	border: 1px solid #c0c4cc;
	border-radius: 4px;
	padding: 10px 20px;
	&__wrapper{
		position: relative;
	}
	&__close-btn{
		position: absolute;
		right: -10px;
		top: -10px;
		width: 20px;
		height: 20px;
		background-color: #fff;
		border: 1px solid #c0c4cc;
		border-radius: 40%;
		z-index: 100;
	}
	&__close-btn-elem{
		display: block;
		position: relative;
		width: 100%;
		height: 100%;
		cursor: pointer;
		&:before, &:after{
			display: block;
			content: '';
			position: absolute;
			width: 10px;
			height: 2px;
			left: 5px;
			top: 9px;
			background-color: #c0c4cc;
		}
		&:before{
			transform: rotate(45deg);
		}
		&:after{
			transform: rotate(-45deg);
		}
	}
}
</style>