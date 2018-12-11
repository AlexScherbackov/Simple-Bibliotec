import Vue from 'vue';
import Vuex from 'vuex';
import $ from 'jquery';
import bookServices from './bookServices.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		books: [],
		author: null
	},
	getters: {
		getBooks: state => state.books,
		getAuthor: state => state.author,
		getBookForId: state => id =>{
			return state.books.filter(book => book.id == id);
		}
	},
	actions: {
		loadBooks(context,payload){

			const searchParameters = bookServices.parsingObjectTOString(payload);
			const url = `${bookServices.URL}${searchParameters}&format=json&jscmd=data`;
			

			$.getJSON(url, function(data){
				context.commit('loadBooks', bookServices.parsingDocs(data.docs));
				bookServices.emit("viewList");
			})
			
			context.commit('checkAuthor', payload.author);
		}
	},
	mutations: {
		loadBooks(state, payload){
			state.books = payload
		},
		checkAuthor(state, payload){
			state.author = payload
		}
	}
})