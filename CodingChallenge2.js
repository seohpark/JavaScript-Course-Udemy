/*** 
var averageJohn = (200 + 120 + 103) / 3;
var averageMike = (116 + 94 + 123) / 3;
consol.log(averageJohn, averageMike);

if(averageJohn > averageMike){
    console.log('John is winner. score ' + averageJohn );
} else if (averageJohn < averageMike){
    console.log('Mark is winner. score ' + averageMike );
} else {
    console.log('동점 입니다.');
}
***/
var averageJohn = (1 + 2 + 3) / 3;
var averageMike = (2 + 3 + 4) / 3;
var averageMary = (2 + 3 + 4) / 3;
console.log(averageJohn, averageMike, averageMary);

if((averageJohn > averageMike) && (averageJohn > averageMary)){
    console.log('John is winner. score ' + averageJohn );
} else if ((averageJohn < averageMike) && (averageMary < averageMike)){
    console.log('Mark is winner. score ' + averageMike );
} else if((averageJohn < averageMary) && (averageMike < averageMary)) {
    console.log('Mary is winner. score ' + averageMary);
} else {
    console.log('There is a draw.');
}