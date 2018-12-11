<template>
	<div>
		<el-row type="flex" justify="center">
		<el-col :span="8">
			<el-form ref="form" :model="searchForm" label-width="120px" label-position="top" class="search-form">
				<el-form-item label="Title" >
					<el-input v-model="searchForm.title"></el-input>
				</el-form-item>
				<el-form-item label="Author" >
					<el-input v-model="searchForm.author"></el-input>
				</el-form-item>
				<el-form-item label="Book ISBN" >
					<el-input v-model="searchForm.isbn"></el-input>
				</el-form-item>
				<el-form-item label="Subject" >
					<el-input v-model="searchForm.subject"></el-input>
				</el-form-item>
				<el-form-item label="Publisher" >
					<el-input v-model="searchForm.publisher"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">Search</el-button>
  			</el-form-item>
			</el-form>
		
		</el-col>
	</el-row>
	</div>
	
</template>

<script>
	import {mapActions} from 'vuex';

	export default {
		data(){
			return{
				searchForm: {
					title: '',
					author: '',
					isbn: '',
					subject: '',
					publisher: ''
				}
			}
		},
		methods: {
			...mapActions(['loadBooks']),
			onSubmit(){
				this.loadBooks(this.searchForm);
				
			},
		/*	...mapActions(['loadBooks']),*/
		}
	}
</script>

<style lang="scss" scoped>
	.search-form{
		border: 1px solid #c0c4cc;
		border-radius: 4px;
		padding: 10px 20px;
	}

	.el-form-item:last-child{
		margin-bottom: 0;
	}
</style>