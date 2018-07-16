import h from 'react-hyperscript';
import { shallow } from 'enzyme';

import Pond from '../components/pond';
import Ping from '../components/ping'

describe('Pond component basics', function() {
  test('Correct method name', function() {
    const wrapper = shallow(h(Pond));
    const methodName = wrapper.name();
    expect(methodName).toBe('renderPond');
  });

  test('See svg element', function() {
    const wrapper = shallow(h(Pond));
    const elementExists = wrapper.exists('svg');
    expect(elementExists).toBe(true);
  });

  test('See ellipse element', function() {
    const wrapper = shallow(h(Pond));
    const elementExists = wrapper.exists('ellipse');
    expect(elementExists).toBe(true);
  });
});

// Pond responding to state changes tests go here 👇

describe('Ping component basics', function() {
  test('See circle element', function () {
    const wrapper = shallow(h(Ping));
    const elementExists = wrapper.exists('circle');
    expect(elementExists).toBe(true);
  });
  
  // FAILING TEST ⚠️
  test('Correct method name', function() {
    const wrapper = shallow(h(Ping));
    const methodName = wrapper.name();
    expect(methodName).toBe('renderPing');
  });
});