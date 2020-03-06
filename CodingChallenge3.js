var billArray = [124, 48, 268];

function tipCalculator(bill){
    var tip;
    if(bill<50){
        tip = bill * 0.2;
    } else if(50 <= bill && bill <200){
        tip = bill * 0.15;
    } else{
        tip = bill * 0.10;
    }
    return tip;
}
var allTips = [tipCalculator(billArray[0]), 
               tipCalculator(billArray[1]), 
               tipCalculator(billArray[2])];
console.log(allTips);

var finalPayment = [allTips[0] + billArray[0],
                    allTips[1] + billArray[1], 
                    allTips[2] + billArray[2]];
console.log(finalPayment);














