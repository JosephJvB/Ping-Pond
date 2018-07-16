import h from 'react-hyperscript';
import { compose, withStateHandlers } from 'recompose';

import Ping from './ping';

window.bgColour = '#193549'; // cobalt2 navy blue

/*
  lush grass + few flowers
  closer to top of screen: ellipses are more flat. have less ry value
*/

module.exports = compose(
  withStateHandlers(
    () => ({
      pingPoint: {}
    }),
    {
      letsPlayPingball: () => (event) => {
        event.persist() // react insists that you persist to resist losing synthetic events
        const { clientX: x, clientY: y } = event
        return { 
          pingPoint: { x, y, radius: 10 }
        }
      },
      embiggen: ({
        pingPoint: {
          radius,
          x,
          y,
        }
      }) => () => {
        // embiggen the smallest ping
        if(radius < 150) {
          return {
            pingPoint: { x, y, radius: radius * 1.01 }
          }
        } else {
          // pop if too big
          return {
            pingPoint: {}
          }
        }
      }
    }
  ),
)(function createPond({
  embiggen,
  letsPlayPingball,
  pingPoint: { x, y, radius, }
}) {
  const {
    bgColour,
    screen: { height, width },
  } = window;
  return h('svg', {
    viewBox: `0 0 ${width} ${height}`,
  }, [
    h('ellipse', {
      onClick: letsPlayPingball,
      cx: '50%',
      cy: height,
      rx: width,
      ry: height - 80,
      fill: bgColour,
    }),
    x && h('g', { // g defines props for all children svg elements
      stroke: 'white',
      strokeWidth: 3,
      fill: 'none',
    }, [
      h(Ping, {
        embiggen,
        x,
        y,
        radius,
      })
    ])
  ]);
});
