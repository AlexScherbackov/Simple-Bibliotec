export default {
	data(){
		return{
			formData:{
				email: '',
				password: ''
			},
			validatorOptions:{
				isEmailValide: true,
				isPasswordValide:{
					logical: true,
					classObject:{
						critical: false,
						warning: false,
						good: false
					}
				}
			}
		}
	},
	methods:{
		closeForm(){
			this.$emit('closeForm');
		},
		validateEmail(address){
			const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			this.validatorOptions.isEmailValide = reg.test(address) ? true : false;
		},
		validateEmailChange(address){
			if(address.length == 0){
				this.validatorOptions.isEmailValide = true;
				return true;
			}
			this.validateEmail(address);
		},
		validateEmailSubmit(address){
			this.validateEmail(address);
			return this.validatorOptions.isEmailValide;
		},
		validatePassword(length){
			if(length <= 6){
				this.validatorOptions.isPasswordValide.logical = false;
				this.validatorOptions.isPasswordValide.classObject.critical= true;
			} else if(length > 6 && length <= 8){
				this.validatorOptions.isPasswordValide.logical = true;
				this.validatorOptions.isPasswordValide.classObject.warning = true;
			} else {
				this.validatorOptions.isPasswordValide.logical = true;
				this.validatorOptions.isPasswordValide.classObject.good = true;
			}
		},
		validatePasswordChange(password){
			const length = password.length;

			for(let key in this.validatorOptions.isPasswordValide.classObject){
				this.validatorOptions.isPasswordValide.classObject[key] = false;
			}

			if(length == 0){
				this.validatorOptions.isPasswordValide.logical = true;
				return true;
			}
			this.validatePassword(length);
		},
		validatePasswordSubmit(password){
			const length = password.length;
			this.validatePassword(length);

			return this.validatorOptions.isPasswordValide.logical; 
		}

	}
}