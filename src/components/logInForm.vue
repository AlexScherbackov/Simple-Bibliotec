<template>
	<div class="sign-form__wrapper">
		<div class="sign-form__close-btn">
			<span class="sign-form__close-btn-elem" @click="closeForm"></span>
		</div>
		<el-row type="flex" justify="center">
			<el-col :span="24">
				<el-form 
				ref="form" 
				:model="formData" 
				label-width="120px" label-position="top" 
				class="sign-form"

				>
				<el-form-item label="Email" >
					<el-input 
					v-model="formData.email" 
					@change="validateEmail" 
					:class="{isNotValide: !validatorOptions.isEmailValide}"
					>
				</el-input>
				<span class="on-error" v-show="!validatorOptions.isEmailValide">*You enter uncorrect email</span>
			</el-form-item>
			<el-form-item label="Password" >
				<el-input 
				v-model="formData.password" 
				@change="validatePassword"
				:class="{
					isCritical: validatorOptions.isPasswordValide.classObject.critical,
					isWarning: validatorOptions.isPasswordValide.classObject.warning,
					isGood: validatorOptions.isPasswordValide.classObject.good
				}"
				>
			</el-input>
			<span class="on-error" v-show="!validatorOptions.isPasswordValide.logical">*You enter uncorrect password</span>
		</el-form-item>

		<el-button type="primary" @click="onSubmit">Sign in</el-button>
	</el-form-item>
</el-form>

</el-col>
</el-row>
</div>
</template>

<script>
	import Form from '../mixins/form.js';

	export default {
		mixins: [Form],
		data(){
			return{
				
			}
		},
		methods:{
			onSubmit(){
				if(this.validatePasswordSubmit(this.formData.password)&&this.validateEmailSubmit(this.formData.email)){
					this.closeForm();
				}
			}

		}
	}
</script>

<style lang="scss" scoped>
.sign-form{
	width: 290px;
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

.isNotValide, .isCritical{
	border: 1px solid #F56C6C;
}

.isWarning{
	border: 1px solid #E6A23C;
}

.isGood{
	border: 1px solid #67C23A;
}


</style>