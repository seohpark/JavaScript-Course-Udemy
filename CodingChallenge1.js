
var massJonh = 92;
var heightJohn = 1.95;

var massMark = 78; //kg
var heightMark = 1.69 //meter
var IsMarkHigher;

var BmiJohn = massJonh / (heightJohn * heightJohn);
var BmiMark = massMark / (heightMark * heightMark);

markHigherBMI = BmiMark > BmiJohn;
console.log('Is Mark\'s BMI higher than John\'s?'  + markHigherBMI);