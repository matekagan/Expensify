import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../../src/components/presentational/Header';

test('Should render header correctly', () => {
    const wrapper = shallow(<Header logOut={() => { }} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should call login function on button click', () => {
    const logOutSpy = jest.fn();
    const wrapper = shallow(<Header logOut={logOutSpy} />);
    wrapper.find('button').simulate('click');
    expect(logOutSpy).toBeCalled();
});
