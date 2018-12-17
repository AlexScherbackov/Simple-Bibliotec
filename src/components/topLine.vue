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
				<nav class="navigation ">
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
			</el-col>
		</el-row>

	</div>
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
.list{
	margin: 0;
	padding: 0;
	line-height: 42px;
}

.logo{
	display: flex;
	align-items: center;
	justify-content: space-around;
	font-size: 28px;
	font-weight: 700;
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

.autorization__btn{
	font-size: 16px;
	letter-spacing: 0.8px;
	
}

</style>