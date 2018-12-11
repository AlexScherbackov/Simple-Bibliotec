import Vue from 'vue';
import $ from 'jquery';
import _ from 'lodash';

export default new Vue({
	data:{
		URL : 'http://openlibrary.org/search.json?'
	},
	methods: {
		emit(event){
			this.$emit(event);
		},
		parsingObjectTOString(obj){
			let resultString = '';

			for(let key in obj){
				if(obj[key]){
					let buf = `${key}=${obj[key].split(' ').join('+')}`;
					resultString== '' ? (resultString = buf) : (resultString = `${resultString}&${buf}`);
				}
			}

			return resultString;

		},
		parsingDocs(arr){
			const result = [];
			console.log(arr);
			let id = 1;

			arr.forEach((item)=>{
				let buf = {};
				buf.id = id++;
				buf.title = item.title;
				buf.author = item.author_name;
				buf.first_publish_year = item.first_publish_year;
				buf.has_fulltext = item.has_fulltext ? "Yes" : "No";
				buf.contributor = item.contributor;
				buf.sentence = item.first_sentence ? item.first_sentence.join(' ') : '';
				buf.isbn = item.isbn;
				buf.person = item.person;
				buf.place = item.place;
				buf.publish_place = item.publish_place;
				buf.publish_year = item.publish_year;
				buf.publisher = item.publisher;
				buf.subject = item.subject;

				if (item.language) {
					buf.languages = item.language.join(", ");
				}
				result.push(buf);
			});
			return result;
		}
	}
})