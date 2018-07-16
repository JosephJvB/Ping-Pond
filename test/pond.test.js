import h from 'react-hyperscript';
import { shallow } from 'enzyme';

import Pond from '../components/pond';

describe('Pond component basics', function () {
  
  test('Correct method name', function() {
    const wrapper = shallow(h(Pond));
    const methodName = wrapper.name();

    expect(methodName).toBe('renderPond');
  });

  test('See svg element', function() {
    const wrapper = shallow(h(Pond));
    const element = wrapper.exists('svg');

    expect(element).toBe(true);
  });

  test('See ellipse element', function() {
    const wrapper = shallow(h(Pond));
    const element = wrapper.exists('ellipse');

    expect(element).toBe(true);
  });

});