import React from 'react';
import { EditMovie } from './EditMovie';
import { movies } from '../../tools/mockData';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from 'react-bootstrap/Modal';
import { MenuItem } from 'react-contextmenu';

Enzyme.configure({ adapter: new Adapter() });

function render(args) {
  const defaultProps = {
    saveMovie: jest.fn(),
    movieToEdit: movies[0],
  };

  const props = { ...defaultProps, ...args };

  return shallow(<EditMovie {...props} />);
}

afterEach(() => {
  jest.clearAllMocks();
});

it('sets show to true if add movie button is clicked', () => {
  const wrapper = render();
  wrapper.find(MenuItem).simulate('click');

  expect(wrapper.find(Modal).props().show).toBe(true);
});

it('sets show to false if Modal X clicked', () => {
  const wrapper = render();
  wrapper.find(Modal).simulate('onHide');

  expect(wrapper.find(Modal).props().show).toBe(false);
});

it('sets show to false if reset button is clicked', () => {
  jest.mock('../../redux/actions/movieActions');
  const wrapper = render();
  wrapper.find('#reset-btn').simulate('click');

  expect(wrapper.find(Modal).props().show).toBe(false);
});

it('sets show to false if button clicked', () => {
  jest.mock('../../redux/actions/movieActions');
  const wrapper = render();
  wrapper.find('#submit-btn').simulate('click', {
    preventDefault: () => {},
  });

  expect(wrapper.find(Modal).props().show).toBe(false);
});

it('sets movie title to a selected value', () => {
  const wrapper = render();
  const input = wrapper.find('#input-title');
  input.simulate('change', { target: { value: 'Title', name: 'title' } });

  expect(wrapper.find('#input-title').prop('value')).toEqual('Title');
});

it('sets movie runtime to a selected value', () => {
  const wrapper = render();
  const input = wrapper.find('#runtime');
  input.simulate('change', { target: { value: '120', name: 'runtime' } });

  expect(wrapper.find('#runtime').prop('value')).toEqual(120);
});

it('sets movie genres to a selected value', () => {
  const wrapper = render();
  const input = wrapper.find('#genres');
  input.simulate('change', { target: { value: 'Fantasy', name: 'genres' } });

  expect(wrapper.find('#genres').prop('value')).toEqual(['Fantasy']);
});

it('sets movie release date to a selected value', () => {
  const wrapper = render();
  const input = wrapper.find('#release_date');
  const date = new Date();
  input.simulate('change', { date });

  expect(wrapper.find('#release_date').prop('value')).toEqual({
    date: date,
  });
});
