<template>
	<div>
		<router-link :to="{name: 'bookList'}" class="bg-blue fixed-top back-link">Back to the list</router-link>
		<el-row>
			<el-col :span="12">
				<div class="flex-container-column book-box">
					<div class="flex-row book__data-row">
						<span class="book__data-name">Название книги:</span>
						<span class="book__data">{{book.title}}</span>
					</div> 
					<div class="flex-row book__data-row">
						<span class="book__data-name">Автор:</span>
						<span class="book__data">{{book.author.toString()}}</span>
					</div>
					<div class="flex-row book__data-row" v-if="book.sentence">
						<span class="book__data-name">Первая строчка:</span>
						<span class="book__data">{{book.sentence}}</span>
					</div>
					<div class="flex-row book__data-row" v-if="book.contributor">
						<span class="book__data-name">Свой вклад внесли:</span>
						<ul class="book__data book__data-list">
							<li v-for="item in book.contributor" class="book__data-list-item">{{item}}</li>
						</ul>
					</div>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="flex-container-column book-box">
					<ul class="book__data book__data-list" v-if="book.isbn" >
							<li v-for="item in book.isbn" class="book__data-list-item"><a href="">{{item}}</a></li>
						</ul>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		props: {
			id: {
				type: Number,
				required: true
			}
		},
		data(){
			return{
				book: null
			}
		} ,
		created(){
			this.book = this.$store.getters.getBookForId(this.id)[0];
			console.log(this.book)
		}
	}
</script>

<style lang="scss" scoped>
	.flex-container-column{
		display: flex;
		flex-direction: column;
	}

	.flex-row{
		display: flex;
	}

	.book-box{
		border: 1px solid #c0c4cc;
    border-radius: 4px;
    padding: 10px 20px;
	}

	.book{
		&__data-row{
			padding: 5px;
		}
		&__data-name{
			font-size: 24px;
    	line-height: 32px;
    	color: #606266;
    	min-width: 40%;
    	text-align: left;
		}
		&__data{
			font-size: 24px;
    	line-height: 32px;
			color: black;
			text-align: left;
		}
		&__data-list{
			margin: 0;
			padding: 0;
			list-style-type: none;
		}
		&__data-list-item{
			margin: 0;
			display: block;
			text-align: left;
		}
	}
</style>