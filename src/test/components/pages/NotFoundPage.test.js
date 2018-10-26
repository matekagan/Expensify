import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../../main/components/pages/NotFoundPage';

test('Should render 404 not found page', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});
