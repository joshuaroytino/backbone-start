var Person = Backbone.Model.extend({
	defaults: {
		name: 'Guest User',
		age: 23,
		occupation: 'Worker'
	},
	
	validate: function(attributes){
		if(attributes.age < 0){
			return 'Age must be positive';
		}

		if(!attributes.name){
			return 'Every person must have a name.';
		}
	},

	work: function(){
		return this.get('name') + ' is working.';
	}
});

var PersonView = Backbone.View.extend({
	tagName: 'li',
	className: 'person',
	id: 'person-id',
	initialize: function(){
		this.render();
	},
	render: function(){
		 this.$el.html( this.model.get('name') + ' (' + this.model.get('age') + ') - ' + this.model.get('occupation') );
	}
});