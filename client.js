import { render } from 'react-dom';
import h from 'react-hyperscript';

import Pond from './components/pond';

// const yaClassic = 'Hello World';

document.addEventListener('DOMContentLoaded', function blastOff() {
  render (
    // root component
    h(Pond),
    // select dom-element_irl
    document.getElementById('x-marks-the-spot')
  );
});

// function App({yaClassic}) {
//   return h('h1', {}, yaClassic);
// };