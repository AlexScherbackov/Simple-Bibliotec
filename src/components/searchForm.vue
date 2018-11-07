<template>
	<div>
		<form class="form-inline search-box" @submit.prevent="loadData">
			<div class="form-group">
				<label for="author" class="mr-2">Author</label>
				<input type="text" class="form-control mr-2" id="Author"  placeholder="Author's name" v-model="author">
			</div>
			
			<button type="submit" class="btn btn-primary">Search</button>
		</form>
	</div>
</template>

<script>
	import bookServices from '../store/bookServices.js';

	export default {
		data(){
			return{
				author: ''
			}
		},
		methods: {
			loadData(){
				bookServices.loadData(this.author);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search-box{
		max-width: 480px;
		width: 100%;
		margin: 0 auto;
	}
</style>