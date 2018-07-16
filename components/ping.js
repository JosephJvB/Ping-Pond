import h from 'react-hyperscript';

module.exports = function renderPing({
  embiggen,
  radius,
  x,
  y,
}) {
  setTimeout(embiggen, 10) // hacky lifecycle imposter
  return h('circle', {
    cx: x,
    cy: y,
    r: radius,
  })
};
