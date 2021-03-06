import React from 'react';
import Counter from '../components/Counter.js';

import Adapter from 'enzyme-adapter-react-16';

// //shallow mount only tests the component - will not test child components (46.0)
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';

configure({ adapter: new Adapter() });

describe ('Counter works correctly', () => {
    it('has the correct initial state value', () => {
    let component = shallow(<Counter />);
    expect(component.state('count')).toBe(0);
})

it('updates the state when a user clicks + ', () => {
    let component = shallow(<Counter />);
    component.find('handleUp').simulate('click');
    expect(component.state('count')).toBe(1);
}) 

it('updates the state when a user clicks - ', () => {
    let component = shallow(<Counter />);
    component.find('handleDown').simulate('click');
    expect(component.state('count')).toBe(-1);
}) 

it('The HTML matches any changes', () => {
    let component = mount(<Counter />);
    let html = component.find('count');
    
    component.find('handleUp').simulate('click');

    expect(component.state('count')).toBe(1);
    expect(html.text()).toBe('1');
  });
});