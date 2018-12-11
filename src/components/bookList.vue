<template>
	<div>
		<h1 class="list-header">{{authorName}}</h1>
		<router-link :to="{name: 'home'}" class="bg-blue fixed-top back-link">Back to the search</router-link>
		<el-table
		:data="books"
		stripe
		@row-click="rowClickHandler"
		style="width: 100%">
			<el-table-column
				prop="author"
				label="Author"
				width="200">
			</el-table-column>
			<el-table-column
				prop="first_publish_year"
				label="Fist publish"
				width="180">
			</el-table-column>
			<el-table-column
				prop="title"
				label="Title">
			</el-table-column>
			<el-table-column
				prop="has_fulltext"
				label="Full text in site">
			</el-table-column>
			<el-table-column
				prop="languages"
				label="Languages">
			</el-table-column>
		</el-table>
		
</div>
</template>

<script>
	//import listItem from './bookListItem.vue';
	import bookServices from '../store/bookServices.js';
	import {mapGetters} from 'vuex';
	export default {
		components: {
			//listItem
		},
		data(){
			return{
				
			}
		},
		computed: {
			...mapGetters({
				books: 'getBooks',
				authorName: 'getAuthor'
			})
		},
		methods: {
			rowClickHandler(event){
				this.$router.push(`/book/${event.id}`);
			}
		} 
	}
</script>

<style lang='scss' scopped>
.list-header{
	text-transform: capitalize;
}

.back-link{
	width: 200px;
	height: 50px;
	display: inline-block;
	top: 10%;
	left: 80%;
	line-height: 50px;
	color: white;
	text-decoration: none;
}
</style>