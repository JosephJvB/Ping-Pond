import h from 'react-hyperscript';
import { compose, withStateHandlers } from 'recompose';

window.bgColour = '#193549'; // cobalt2 navy blue

/*
  lush grass + few flowers
  closer to top of screen: ellipses are more flat. have less ry value
*/

module.exports = compose(
  withStateHandlers(
    () => ({
      pingPoint: null
    }),
    {
      letsPlayPingball: (state, props) => (event) => {
        event.persist() // react insists that you persist to resist losing synthetic events
        const { clientX: x, clientY: y } = event
        return { 
          pingPoint: { x, y }
        }
      }
    }
  ),
)(function createPond({
  letsPlayPingball,
  pingPoint
}) {
  const {
    bgColour,
    screen: { height, width },
  } = window;
  return h('svg', {
    viewBox: `0 0 ${width} ${height}`,
  }, [
    h('ellipse', {
      onClick: (e) => letsPlayPingball(e),
      cx: '50%',
      cy: height,
      rx: width,
      ry: height - 80,
      fill: bgColour,
    }),
    pingPoint && h('circle', {
      cx: pingPoint.x,
      cy: pingPoint.y,
      r: 20,
      fill: 'white',
    }),
  ]);
});
