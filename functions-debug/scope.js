const tip = .15
function calculateTotalwithTip(price){
    //price only accessible within this function
    return price + tip;
}
function calculateTotalwithTax(price, tax = .11){
    //tax only available within this function
    return price + price * tax
}

const totalafterTax = calculateTotalwithTax(25);
console.log(totalAfterTax);

const total = calculateTotalwithTip(totalAfterTax);
console.log(totalAfterTip);