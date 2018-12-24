import search from '../components/forms/searchForm.vue';
import list from '../components/books/bookList.vue';
import book from '../components/books/book.vue';
import homePage from '../components/homePage.vue';

export const routes = [
	{
		path: '/',
		component: homePage,
		name: 'home'
	},
	{
		path: '/search',
		component: search,
		name: 'search'
	},
	{
		path: '/list',
		component: list,
		name: 'bookList'
	},
	{
		path: '/book/:id',
		component: book,
		props: true
	}
]