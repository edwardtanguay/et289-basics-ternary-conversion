import './style.css'

// ternary
// if statement

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
let classLevel = 'beginner';
const topic = 'JavaScript';
const topic1 = 'ternary';
const topic2 = 'data conversion';
//  const topicLine = topic + ' Basics (' + topic1 + ', ' + topic2 + ')';
const topicLine = `${topic} Basics (${topic1}${classLevel === 'advanced' && dataConversionApproved ? `, ${topic2}` : ''})`;


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h2 style="${classLevel === 'beginner' ? 'color: red' : ''}">${topicLine}</h2>
  <p>${classLevel === "intermediate" || classLevel === "advanced"? "Please pickup certifacates at office." : ""}</p>
  <p style="${processingIsFinished ? 'font-weight: bold' : ''}">Report: ${reportStatus}</p>
  <p>Next todo: ${reportStatus === 'finished' ? 'call DHL' : 'wait until report is finished'}</p>
  <p>${reportStatus==='finished'? 'DHL Number: +49 22 22 2 2':'' }</p>
`