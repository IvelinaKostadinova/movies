import React from 'react';
import { DeleteMovie } from './DeleteMovie';
import { movies } from '../../tools/mockData';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from 'react-bootstrap/Modal';
import { MenuItem } from 'react-contextmenu';

Enzyme.configure({ adapter: new Adapter() });

function render(args) {
  const defaultProps = {
    deleteMovie: jest.fn(),
    movieToDelete: movies[0],
  };

  const props = { ...defaultProps, ...args };

  return shallow(<DeleteMovie {...props} />);
}

afterEach(() => {
  jest.clearAllMocks();
});

it('sets show to true if MenuItem clicked', () => {
  const wrapper = render();
  wrapper.find(MenuItem).simulate('click');

  expect(wrapper.find(Modal).props().show).toBe(true);
});

it('sets show to false if Modal X clicked', () => {
  const wrapper = render();
  wrapper.find(Modal).simulate('onHide');

  expect(wrapper.find(Modal).props().show).toBe(false);
});

it('sets show to false if button clicked', () => {
  jest.mock('../../redux/actions/movieActions');
  const wrapper = render();
  wrapper.find('button').simulate('click', {
    preventDefault: () => {},
  });

  expect(wrapper.find(Modal).props().show).toBe(false);
});
