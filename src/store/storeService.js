import Vue from 'vue';
import Vuex from 'vuex';
import $ from 'jquery';
import bookServices from './bookServices.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		books: [],
		author: null,
		users: [],
		actualUser: null
	},
	getters: {
		getBooks: state => state.books,
		getAuthor: state => state.author,
		getBookForId: state => id =>{
			return state.books.filter(book => book.id == id);
		},
		getActualUser: state => state.actualUser
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
		},
		addUser(context,payload){
			context.commit('addUser', payload);
		},
		exitUser(context){
			context.commit('exitUser');
		},
		loginUser(context,payload){
			
			const user = this.state.users.filter(user=>{
				 return (user.email == payload.email)&&(user.password == payload.password) ? true : false ;
			})

			if(user.length > 0){
				context.commit('loginUser', Object.assign({},user[0]));
			}
		}
	},
	mutations: {
		loadBooks(state, payload){
			state.books = payload
		},
		checkAuthor(state, payload){
			state.author = payload
		},
		addUser(state, payload){
			state.users.push(payload);
			state.actualUser = `${payload.name}_${payload.surname}`;
		},
		exitUser(state){
			state.actualUser = null;
		},
		loginUser(state, payload){
			state.actualUser = `${payload.name}_${payload.surname}`;
		}
	}
})