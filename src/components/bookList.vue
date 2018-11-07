<template>
	<div class="container">
		<h1 class="list-header">{{name}}</h1>
		<listItem v-for="(book, i) in books" :key="i" :book="book" :index="(i+1)"></listItem>
	</div>
</template>

<script>
	import listItem from './bookListItem.vue'
	import bookServices from '../store/bookServices.js';

	export default {
		components: {
			listItem
		},
		data(){
			return{
				books: [],
				name: null
			}
		},
		
		created(){
			this.name = bookServices.authorsName;
			this.books = bookServices.bibliography;
		}
	}
</script>

<style lang='scss' scopped>
	.list-header{
		text-transform: capitalize;
	}
</style>