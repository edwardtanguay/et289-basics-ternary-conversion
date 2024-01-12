import './style.css'

// ternary
// if statement

const processingIsFinished = true;

// let reportStatus = '';
// if (processingIsFinished) {
//   reportStatus = 'finished';
// } else {
//   reportStatus = 'processing...';
// }
const reportStatus = processingIsFinished ? 'finished' : 'processing...';



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h2>Basics</h2>
<p>Report: ${reportStatus}</p>
<p>Next todo: ${reportStatus === 'finished' ? 'call DHL' : 'wait until report is finished'}</p>
`
