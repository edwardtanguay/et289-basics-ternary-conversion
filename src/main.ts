import './style.css'

// type IClassLevel = "beginner" | "intermediate" | "advanced";

// ternary
// if statement


// isNAN

// Boolean()

let input = "    ";

if (input.trim() === '') {
// if (!Boolean(input)) {
  console.log('please enter value');
} else {
  console.log(' you entered ' + input);
}

// example: STRINGS that come from an HTML form
const strAccountBalance = "20.9";
const strDeposit = "10"

const numAccountBalance = parseFloat(strAccountBalance);
const numDeposit = Number(strDeposit);

// console.log(111, numAccountBalance);
// console.log(222, numDeposit);

const newBalance = numAccountBalance + numDeposit;

if (isNaN(numAccountBalance) || isNaN(numDeposit)) {
  // console.log('Please type in numbers in the form.');
} else {
  // console.log('your balance is', newBalance.toFixed(2));
}

//XOR
// Wer einen Gutschein hat oder sich zum ersten Mal im Shop anmeldet, kann 10% Rabatt erhalten. Aber nicht gleichzeitig, denn die Rabatte addieren sich nicht. Dann : (isGutschein)XOR(erstAnmeldet)
const firstTimeCustomer = false;
const coupon = false;

// new user with coupon = discount
// new user without coupon = discount
// user with coupon = discount
// user without coupon = NO discount

const discount = firstTimeCustomer || (!firstTimeCustomer && coupon);
// console.log('discount', discount);

const classNumber = "302";

const processingIsFinished = false;

// let reportStatus = '';
// if (processingIsFinished) {
//   reportStatus = 'finished';
// } else {
//   reportStatus = 'processing...';
// }
const reportStatus = processingIsFinished ? 'finished' : 'processing...';

// string literals (added to JavaScript in 2015 with ES6)
// class levels: beginner, intermediate, advanced
let dataConversionApproved = true;
let classLevel = "beginner"
const topic = 'JavaScript';
const topic1 = 'ternary';
const topic2 = 'data conversion';
//  const topicLine = topic + ' Basics (' + topic1 + ', ' + topic2 + ')';
const topicLine = `${topic} Basics (${topic1}${classLevel === 'advanced' && dataConversionApproved ? `, ${topic2}` : ''})`;


// classes 300, 301, 302 = "Silver Building"
// classes 400, 401, 402 = "Gold Building"

const nextClassNumber = Number(classNumber) + 1;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Class ${classNumber}</h1>
<h2 style="${classLevel === "beginner" ? 'color: red' : ''}">${topicLine}</h2>


  <p>${classLevel === "intermediate" || classLevel === "advanced"? "Please pickup certifacates at office." : ""}</p>
  <p style="${processingIsFinished ? 'font-weight: bold' : ''}">Report: ${reportStatus}</p>
  <p>Next todo: ${reportStatus === 'finished' ? 'call DHL' : 'wait until report is finished'}</p>
  <p>${reportStatus==='finished'? 'DHL Number: +49 22 22 2 2':'' }</p>
  <p>Next class will be ${parseInt(classNumber) + 1} </p>
  <p>Next class will be ${Number(classNumber) + 1} </p>
  <hr/>
<p>Next Class: ${nextClassNumber}</p>
<p>Next Class Location: ${String(nextClassNumber).startsWith('3') ? 'Silver Building' : 'Gold Building'}</p>
<hr>
<p>Account balance: <input/></p>
<p>deposit: <input/></p>

`