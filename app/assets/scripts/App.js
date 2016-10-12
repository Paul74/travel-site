var $ = require('jquery');
var Person = require('./modules/Person');

alert("abc 123");

var john = new Person("john doe","blue");
john.greet();

var jane = new Person("jane smith","green");
jane.greet();

$("h1").remove();