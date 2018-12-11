import search from '../components/searchForm.vue';
import list from '../components/bookList.vue';
import book from '../components/book.vue';

export const routes = [
	{
		path: '/',
		component: search,
		name: 'home'
	},
	{
		path: '/list',
		component: list,
		name: 'bookList'
	},
	{
		path: '/book/:id',
		component: book
	}
]