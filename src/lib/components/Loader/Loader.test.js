import React from 'react';
import { render, screen } from '@testing-library/react'; // Import screen query functions

import Loader from './Loader';

test('Loader > renders without crashing', () => {
  render(<Loader />);
});

test('Loader > renders with custom class name', () => {
  render(<Loader customClassName="custom-loader" />);

  const loaderElement = screen.getByTestId('loader'); // Use screen.getByTestId
  expect(loaderElement).toBeInTheDocument();
});
