/*
var massJonh = 92;
var heightJohn = 1.95;

var massMark = 78; //kg
var heightMark = 1.69 //meter
var IsMarkHigher;

var BmiJohn = massJonh / (heightJohn * heightJohn);
var BmiMark = massMark / (heightMark * heightMark);

markHigherBMI = BmiMark > BmiJohn;
console.log('Is Mark\'s BMI higher than John\'s?'  + markHigherBMI);
*/
var John = {
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBmi: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
var Mark = {
    fullName: 'Mark David',
    mass: 78,
    height: 1.69,
    calcBmi: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
//John.calcBmi();
//Mark.calcBmi();
//console.log(John.bmi, Mark.bmi);

if(John.calcBmi() > Mark.calcBmi()){
    console.log(John.fullName + '\'BMI is higher ' + John.bmi);
} else if(John.bmi < Mark.bmi()){
    console.log(Mark.fullName + '\'BMI is higher ' + Mark.bmi);
} else {
    console.log('same');
}




















































