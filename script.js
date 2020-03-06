/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);


/// Type coercion
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old '
 + job + '. is he married? ' + isMarried);

 // Variable mutation
 age = 'twenty eight';
 job = 'driver';

 alert(firstName + ' is a ' + age + ' year old '
 + job + '. is he married? ' + isMarried);

 var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);

/// Basic operators

var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

yearJohn = now - 28;
yearMark = now - 33;

console.log(yearJohn);

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');


///Operators precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);


/// If / else statements

var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married'){
    console.log(firstName + ' is married');
} else{
    console.log(firstName + ' will hopefully marry soon');
}

var isMarried = false;

///Functions

 function calculateAge(birthYear){
     return 2018 - birthYear;
 }

 var ageJohn = calculateAge(1990);
 var ageMike = calculateAge(1948);
 var ageJane = calculateAge(1969);
 console.log(ageJohn, ageMike, ageJane);

 function yearUntilRetirement(year, firstName){
     var age = calculateAge(year);
     var retirement = 65 - age;

     if(retirement > 0){
         console.log(firstName + ' retires in ' +
         retirement + ' years');
     }
     else{
         console.log(firstName + ' is already retired');
     }
 }
 yearUntilRetirement(1990, 'John');
 yearUntilRetirement(1948, 'Mike');
 yearUntilRetirement(1969, 'Jane');

var WhatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches';
        case 'driver':
            return firstName + ' drives';
        case 'designer':
            return firstName + ' designs';
        default:
            return firstName + ' does something else';
    }
}

console.log(WhatDoYouDo('teacher', 'John'));
console.log(WhatDoYouDo('driver', 'Mike'));


/// Arrays
//Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

//Mutate array data
names[1] = 'Ben';
console.log(names);

names[names.length] = 'Mary';
console.log(names);

//Different data types
var john = ['John', 'Smith', 1990, 'teachr', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
console.log(john);
john.shift();
console.log(john);

console.log(john.indexOf(23));
console.log(john.indexOf('Smith'));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a disigner'
 : 'john is a designer';
console.log(isDesigner);

*/
///Objects and properties 

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        this.age = 2018 - this.birthYear;
        //return 2018 - this.birthYear;
    }
};
//var age = john.calcAge();
//john.age = age;
//john.age = john.calcAge();  //동적으로 속성추가
john.calcAge();
console.log(john);























