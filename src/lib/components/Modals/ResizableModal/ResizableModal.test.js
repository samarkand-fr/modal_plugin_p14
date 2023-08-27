import React from 'react';
import { render, screen } from '@testing-library/react';
import ResizableModal from './ResizableModal';

const defaultProps = {
  onClose: jest.fn(),
  initialWidth: 400,
  initialHeight: 300,
  minWidth: 200,
  minHeight: 150,
  maxWidth: 800,
  maxHeight: 600,
};

it('renders correctly', () => {
  render(<ResizableModal {...defaultProps}>Content</ResizableModal>);
  const resizableModal = screen.getByTestId('resizable-modal');
  expect(resizableModal).toBeInTheDocument();
});
