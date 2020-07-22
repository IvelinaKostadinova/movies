import React from 'react';
import Search from './Search';
import renderer from 'react-test-renderer';

it('sets Search button option', () => {
  const tree = renderer.create(<Search onSearch={jest.fn()}></Search>);

  expect(tree).toMatchSnapshot();
});
