import React from 'react';
import Actions from './Actions';
import renderer from 'react-test-renderer';

it('sets all actions', () => {
  const tree = renderer.create(
    <Actions onFilter={jest.fn()} onSort={jest.fn()} />
  );

  expect(tree).toMatchSnapshot();
});
