import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../../main/components/pages/LoadingPage';

test('Should render 404 not found page', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});
