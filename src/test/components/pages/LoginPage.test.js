import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../../main/components/pages/LoginPage';

test('Should render Login page correclty', () => {
    const wrapper = shallow(<LoginPage logIn={() => { }} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should call logIn function on button click', () => {
    const loginSpy = jest.fn();
    const wrapper = shallow(<LoginPage logIn={loginSpy} />);
    wrapper.find('button').simulate('click');
    expect(loginSpy).toHaveBeenCalled();
});
