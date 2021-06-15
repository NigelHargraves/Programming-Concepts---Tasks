//set variables
let firstName = ('Nigel');
let lastName = ('Hargraves');
let fullName = (firstName + ' ' + lastName);
let preTipTotal = 19.74;
const tipPercentage = 2;

let tipTotal = (tipPercentage / 100) * preTipTotal; //calculate tip
let totalBill = preTipTotal + tipTotal; //calculate total bill

document.write(fullName + '<br>'); //display name
document.write('Your total bill, with tip, is £' + totalBill.toFixed(2) + '<br>'); //display Bill to 2 decimal places
document.write('Your tip amount is £' + tipTotal.toFixed(2)); //display tip amount to 2 decimal places