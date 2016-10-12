var $ = require('jquery');
import Person from './modules/Person';

class Adult extends Person {
	payTaxes(){
		console.log(this.name + " now pay tax ");
	}
}

alert("abc 123");

var john = new Person("john doe","blue");
john.greet();

var jane = new Adult("jane smith","orange");
jane.greet();
jane.payTaxes();

$("h1").remove();