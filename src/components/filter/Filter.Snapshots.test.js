import React from 'react';
import Filter from './Filter';
import renderer from 'react-test-renderer';

it('sets genre filter to COMEDY', () => {
  const tree = renderer.create(
    <Filter text={'COMEDY'} handleClick={jest.fn()}></Filter>
  );

  expect(tree).toMatchSnapshot();
});
