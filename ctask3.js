//call(), apply()
// The call() method calls a function with a given this value and arguments provided individually.
// call() and apply() serve the exact same purpose. 
// The only difference between how they work is that call() expects all parameters to be passed in individually, 
// whereas apply() expects an array of all of our parameters.
// Example
var person = {
    firstname: 'kiruba',
    lastname: 'garan ',
    getpersonName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var personName = function(snack, hobby) {
    console.log(this.getpersonName() + ' loves ' + snack + ' and ' + hobby);
};

personName.call(person,'chocolates', 'cricket');
personName.apply(person,['chocolates', 'cricket']);
// bind()
// The bind() method creates a new function that, when called, has its this keyword set to the provided value.
// The main differences between bind() and call() is that the call() method:
// Accepts additional parameters as well
// Executes the function it was called upon right away.
// The call() method does not make a copy of the function it is being called on.
//Examples
var person = {
    firstname: 'kiruba',
    lastname: 'garan ',
    getPersonName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var personName = function(snack, hobby) {
    console.log(this.getPersonName() + 'I choose you!');
    console.log(this.getPersonName() + ' loves ' + snack + ' and ' + hobby);
};

var logperson = personName.bind(person);

logperson('chocolate', 'cricket');
