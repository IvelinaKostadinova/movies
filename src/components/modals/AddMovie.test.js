import React, { useState } from 'react';
import { AddMovie } from './AddMovie';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from 'react-bootstrap/Modal';

Enzyme.configure({ adapter: new Adapter() });

function render(args) {
  const defaultProps = {
    saveMovie: jest.fn(),
  };

  const props = { ...defaultProps, ...args };

  return shallow(<AddMovie {...props} />);
}

afterEach(() => {
  jest.clearAllMocks();
});

it('sets show to true if add movie button is clicked', () => {
  const wrapper = render();
  wrapper.find('#add-movie-btn').simulate('click');

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
  const setMovie = jest.fn();

  const wrapper = render();
  wrapper
    .find('#input-title')
    .simulate('onChange', { target: { value: 'Title' } });

  expect(setMovie).not.toHaveBeenCalled();
});

it('sets movie runtime to a selected value', () => {
  const wrapper = render();
  wrapper.find('#runtime').simulate('onChange', { target: {} });

  expect(wrapper.find('#runtime').props().value).toBe(undefined);
});
