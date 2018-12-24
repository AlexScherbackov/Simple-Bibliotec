<template>
	<div class="row listItem">
		<div class="col-3">
			<span class="text-field" v-for="(author, i) in book.author_name">{{author}}</span>
		
		</div>
		<div class="col-1">
			<span class="text-field">{{book.first_publish_year}}</span>
		</div>
		<div class="col-3">
			<span class="text-field">{{book.title}}</span>
		</div>
		<div class="col-1">
			<span class="text-field">{{hasFullText}}</span>
		</div>
		<div class="col-4">
			<span class="text-field">{{allLanguages}}</span>
		</div>
	
	</div>
</template>
	
<script>
	export default {
		props:{
			book:{
				type: Object,
				required: true
			},
			index: Number
		},
		data(){
			return{
			}
		},
		computed:{
			hasFullText(){
				return this.book.has_fulltext ? "Yes" : "No";
			},
			allLanguages(){
				let language = "I don't know";
				if (this.book.language) {
					language = this.book.language.join(", ");
				}
				return language;
			}
		}
	}
</script>

<style lang='scss' scopped>
	.listItem{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 10px;
		padding-bottom: 10px;
		border-bottom: 1px solid gray;
	}
	.text-field{
		max-width: 100%;
	}
</style>