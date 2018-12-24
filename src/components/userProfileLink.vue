<template>

	<el-dropdown>
		<span class="profile-link">
			{{user}}<i class="el-icon-arrow-down el-icon--right"></i>
		</span>
		<el-dropdown-menu slot="dropdown" class="profile-menu-list">
			<el-dropdown-item>To Profile</el-dropdown-item>
				<el-dropdown-item>Settings</el-dropdown-item>
				<el-dropdown-item>Books</el-dropdown-item>
				<el-dropdown-item >
					<span 
						class="profile-menu-event-elem" 
						@click="exit">
							Exit
					</span>
				</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>

	</template>

	<script>
		import {mapGetters,mapActions} from 'vuex';

		export default {
			data(){
				return{}
			},
			computed:{
				...mapGetters({user:'getActualUser'})
			},
			methods:{
				...mapActions(['exitUser']),
				exit(){
					this.exitUser()
				}
			}
		}
	</script>

	<style lang="scss" scoped>
	.profile-link{
		line-height: 42px;
		font-size: 24px;
		color: white;
	}

	.profile-menu-list{
		padding: 5px;
		max-width: 100px;
	}

	.profile-menu-event-elem{
		display: block;

	}

	.el-dropdown-menu__item{
		padding: 5px;
		width: 100%;
		line-height: 2;
		box-sizing: border-box;
	}
</style>