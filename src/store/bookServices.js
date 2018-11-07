import Vue from 'vue';
import $ from 'jquery';
import _ from 'lodash';

export default new Vue({
	data:{
		bibliography: [],
		name: null
	},
	methods: {
		loadData(name){
			const URL = 'http://openlibrary.org/search.json?author='+name+'&format=json&jscmd=data';
			const _self = this;
			this.authorsName = name;
			$.getJSON(URL, function(data){
				_self.bibliography = data.docs;
			})
		},
		checkbiBliographyLoad(){
			return this.bibliography.length > 0 ? true : false
		}
	},
	watch: {
		"bibliography": function(){
			if(this.bibliography.length > 0){
				this.$emit("viewList");
			}
		}
	}

})