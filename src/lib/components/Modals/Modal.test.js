import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal'; // Adjust the import path as needed

describe('Modal component', () => {
  const mockClose = jest.fn();

  beforeEach(() => {
    mockClose.mockClear();
  });


  it('does not render modal content when isOpen is false', () => {
    render(
      <Modal isOpen={false} close={mockClose}>
        <p>Modal Content</p>
      </Modal>
    );

    const modalContent = screen.queryByText('Modal Content');
    expect(modalContent).not.toBeInTheDocument();
  });

  it('calls close function when close button is clicked', () => {
    render(
      <Modal isOpen={true} close={mockClose}>
        <p>Modal Content</p>
      </Modal>
    );

    const closeButton = screen.getByLabelText('Close');
    fireEvent.click(closeButton);
    expect(mockClose).toHaveBeenCalled();
  });

});
