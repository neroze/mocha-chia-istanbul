var assert = require('assert');
var should = require('chai').should() //actually call the function
var app = require('../app');
var expect = require('chai').expect;

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });

// var foo = 'bar'
//   	, beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

// describe('ChaiTestCase', function() {
// 	it('fOO should string, with value bar, lengthOf 3', function() {
//     foo.should.be.a('string');
// 		foo.should.equal('bar');
// 		foo.should.have.lengthOf(3);
// 		beverages.should.have.property('tea').with.lengthOf(3);
//   });

//   it('beverages should have property named tea', function() {
// 		beverages.should.have.property('tea').with.lengthOf(3);
//   });

// });
//


describe('JumperApp', function(){
	var name = 'Niraj'
	app.setName(name)
	it('shoud set name as Niraj', function(){
		var _name = app.getName();
		_name.should.be.a('string');
		assert.equal(_name, name);
	})
})

describe('Deep array testing 0001', function(){
	it('shoud have property with lengthOf 5', function(){

		var people = [
										{name:'niraj', last:"maharjan"},
										{name:'niraj', last:"maharjan"},
										{name:'niraj', last:"maharjan"},
										{name:'superman', last:"maharjan"},
										{name:'batman', last:"maharjan"},
								];

		expect(people).to.have.lengthOf(5);
	})
})

describe('Deep array testing 0002', function(){
	it('shoud have property Name', function(){
		var people = {name:'Niraj', lastName: 'maharjan', email: ['nerooze@gmail.com','hi@nirajmaharjan.com.np']};
		expect(people).to.have.property('email').with.lengthOf(2);


		describe('0002.1 => Deep array testing 001', function(){
			it('Last name should be maharjan', function(){
					assert.equal(people.lastName, 'maharjan');
				})
		})

	})
})



