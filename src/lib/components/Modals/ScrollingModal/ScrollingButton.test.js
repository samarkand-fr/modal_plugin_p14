import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ScrollingButton from './ScrollingButton';

test('renders scrolling button with correct text', () => {
  const buttonText = 'Click me';
  render(<ScrollingButton text={buttonText} onClick={() => {}} />);

  const buttonElement = screen.getByText(buttonText);
  expect(buttonElement).toBeInTheDocument();
});

test('calls onClick when button is clicked', () => {
  const mockOnClick = jest.fn();
  const buttonText = 'Click me';
  render(<ScrollingButton text={buttonText} onClick={mockOnClick} />);

  const buttonElement = screen.getByText(buttonText);
  fireEvent.click(buttonElement);

  expect(mockOnClick).toHaveBeenCalledTimes(1);
});
