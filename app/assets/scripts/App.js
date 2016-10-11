var $ = require('jquery');
var Person = require('./modules/Person');

var john = new Person("john doe","blue");
john.greet();

var jane = new Person("jane smith","green");
jane.greet();

$("h1").remove();