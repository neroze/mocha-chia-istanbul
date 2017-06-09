var jumper = {}
jumper.name = null;
jumper.people = [];

jumper.setName = function(name){
	this.name = name;
}

jumper.getName = function(){
	return this.name;
}

jumper.pushPeople = function(person){
	this.people.push(person)
}
module.exports = jumper;