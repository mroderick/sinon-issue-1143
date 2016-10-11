import React from 'react';
import { shallow } from 'enzyme';

// including sinon and AppComponent at the same time causes the TypeError
// including only one works.

//import sinon from 'sinon';
import AppComponent from './Component';


describe('<AppComponent />', () => {

  it('renders a TouchableOpacity component', () => {
    const wrapper = shallow(<AppComponent />);
    expect(wrapper.find('TouchableOpacity').length).toEqual(1);
  });

  it('renders Text component with passed props.content', () => {
    const wrapper = shallow(<AppComponent content={'Test-content'}/>);
    expect(wrapper.find('Text').children().text()).toContain('Test-content');
  });

  test('Should react to the onPress event', () => {
    const mockFunction = jest.fn(() => 'Mock function')
    const wrapper = shallow(<AppComponent onPress={mockFunction} />);
    expect(wrapper.props().onPress()).toEqual('Mock function');
    expect(mockFunction).toBeCalled()
  })

// This is where I'd like to use sinon
/*
  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<AppComponent onClick={'onButtonClick'} />);
    console.log(wrapper.find('TouchableOpacity'));
    wrapper.find(TouchableOpacity).simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
*/

});
