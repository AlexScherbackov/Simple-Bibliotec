<template>
	<div class="top-line container">

		<el-row :gutter="10" class="row">
			<el-col :span="6">
				<div class="logo">
					<span>Simple</span> 
					<span class="logo__upper logo-hover-effect">Book</span> 
					<span>Library</span>
				</div>
			</el-col>
			<el-col :span="12">
				<nav class="navigation">
					<ul class="navigation__list list">
						<li class="navigation__list-item">Site Map</li>
						<li class="navigation__list-item">
							<router-link :to="{name: 'search'}">Search</router-link>
						</li>
						<li class="navigation__list-item">About the project</li>
					</ul>
				</nav>
			</el-col>
			<el-col :span="6">
				<component :is="autorizationTriger"  @callSignForm="callSignForm" @callLogForm="callLogForm"></component>
			</el-col>
		</el-row>
		
	</div>
</template>

<script>
	import autorizationBar from './autorizationBar.vue';
	import userLink from './userProfileLink.vue';

	export default {
		components:{
			'autorization-bar': autorizationBar,
			'user-link': userLink
		},
		props:{
			autorization: Boolean
		},
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
		},
		computed:{
			autorizationTriger(){
				return this.autorization ? 'user-link' : 'autorization-bar';
			}
		}
	}
</script>

<style lang="scss" scoped>

.logo{
	display: flex;
	align-items: center;
	justify-content: space-around;
	font-size: 28px;
	font-weight: 700;
	cursor: pointer;
	&:hover .logo-hover-effect:after{
		left: 120%;
		transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
		
	};
	&__upper{
		display: block;
		position: relative;
		padding: 5px;
		background-color: #FFA812;
		text-transform: uppercase;
		font-style: 32px;
		
	}
}

.logo-hover-effect{
	overflow: hidden;
	&:after {
		background: #fff;
		content: "";
		height: 155px;
		left: -75px;
		opacity: .2;
		position: absolute;
		top: -50px;
		transform: rotate(35deg);
		transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
		width: 50px;
		z-index: 10;
	}
}

.top-line{
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80px;
	background-color: #4285B4;
	color: white;
	
}

</style>