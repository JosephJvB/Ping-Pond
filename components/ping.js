import h from 'react-hyperscript';

module.exports = function renderPing({
  embiggen,
  radius,
  x,
  y,
}) {
  /*
    hacky lifecycle imposter
    it sets state, causes re-render of Ping -> calls embiggen again
    probably something will go horribly wrong as a result 🤷‍
  */
  setTimeout(embiggen, 10);
  return h('circle', {
    cx: x,
    cy: y,
    r: radius,
  })
};
