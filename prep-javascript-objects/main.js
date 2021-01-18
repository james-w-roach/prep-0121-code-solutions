var person = {
  firstName: 'John',
  lastName: 'Smith',
  hobby: 'coding'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: ", fullName);

person.job = 'lawyer';
console.log("The person's current job is: ", person.job);

person.previousJob = 'waiter';
console.log("The person's previous job is: ", person.previousJob);

console.log('Complete person object: ', person);

var myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: '1960'
};
console.log(myCar);

myCar['owner'] = fullName;

var string = 'My name is ' + myCar['owner'] + ' and I drive a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'] + '.';
console.log(string);

myCar['color'] = 'red';
console.log(myCar);
