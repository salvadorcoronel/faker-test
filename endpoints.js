/*
  In this example we will create a 'endpoint' we will return a list of users 
  with some basic data to be used by the frontend 
  through an AJAX request to display on the web site with its own format. 
  For this we need to install the module 'faker' of node 
  that will help us generate random data from all the fields we need.
*/
var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

app.get('/', function (req, res) {
    res.send('Hellow world');
})

//Start: EndPoint 1
var createRandomUser = function(){
	var randomUuid = faker.random.uuid();	
	var randomName = faker.name.findName();
	var randomSentence = faker.lorem.sentence();
	var randomDate = faker.date.recent();
  	var randomImage = faker.image.image();
  	return {
  		id: randomUuid,  		
	    name: randomName,
	    content: randomSentence,
	    date: randomDate,
	    image: randomImage
  	}
}

app.get('/posts', function (req, res) {
  	var quantity = _.random(5,10);
  	var users = _.times(quantity, createRandomUser);
  	res.json(users);
})
//End: EndPoint 1

//Start: EndPoint 2
var generarCompany = function(){
  var random1 = faker.company.companyName(); 
  var random5 = faker.address.city(); 
  var random2 = faker.company.catchPhrase();
  var random3 = faker.company.catchPhraseAdjective();
  var random4 = faker.company.catchPhraseDescriptor();
  
  return {
    company: random1,
    address: random5,     
    phrase: random2,
    adjetive: random3,
    descriptor: random4
  }
}

app.get('/companies', function (req, res) {
  	var quantity = _.random(5,10);
  	var companies = _.times(quantity, generarCompany);
  	res.json(companies);
})
//End: EndPoint 2

app.listen(3000);