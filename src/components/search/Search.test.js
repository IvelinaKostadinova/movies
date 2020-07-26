import React from 'react';
import { Search } from './Search';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  onSearch: jest.fn(),
};

function render(args) {
  const props = { ...defaultProps, ...args };

  return shallow(<Search {...props} />);
}

afterEach(() => {
  jest.clearAllMocks();
});

it('sets text on search text input change event', () => {
  const wrapper = render();
  const input = wrapper.find('#search__text');
  input.simulate('change', { target: { value: 'Title' } });

  expect(wrapper.find('#search__text').prop('value')).toEqual('Title');
});

it('should invoke onSearch', () => {
  const wrapper = render();
  const input = wrapper.find('#search__button');
  input.simulate('click');

  expect(defaultProps.onSearch).toBeCalled();
});
