//a function to return the value of the tip
function tipTotal() {
    return tipPercentage / 100 * preTipTotal; //calc tip;
}

//a function to calculate the total bill
function calcBill() {
    return preTipTotal + totalTip; //calc bill
}

//set variables
var preTipTotal = 19.74;
const tipPercentage = 2;
var firstName = ('Nigel');
var lastName = ('Hargraves');
var fullName = (firstName + ' ' + lastName);

var totalTip = tipTotal() //call tipTotal function

document.write(fullName + '<br>'); //display name
document.write('Your total bill, with tip, is £' + calcBill().toFixed(2) + '<br>'); //call calcBill function and display Bill to 2 decimal places
document.write('Your tip amount is £' + totalTip.toFixed(2)); //display tip amount to 2 decimal places