import { render } from 'react-dom';
import h from 'react-hyperscript';

const yaClassic = 'Hello World';

document.addEventListener('DOMContentLoaded', function blastOff() {
  render (
    // root component
    h(App, {
      yaClassic
    }),
    // select dom-element_irl
    document.getElementById('x-marks-the-spot')
  );
});

// console.log('Hello World'); hates it

function App ({yaClassic}) {
  return h('h1', {}, yaClassic);
};