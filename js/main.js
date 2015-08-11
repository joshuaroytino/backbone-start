var Person = function(config){
	this.name = config.name;
	this.age = config.age;
	this.occupate = config.occupation;
};

Person.prototype.work = function(){
	return this.name + ' is working.';
};