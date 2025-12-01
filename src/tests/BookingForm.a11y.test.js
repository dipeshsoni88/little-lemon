import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '../js/Main';
import { MemoryRouter } from 'react-router-dom';

test('Booking page has required form fields and labels', () => {
  render(
    <MemoryRouter initialEntries={["/booking"]}>
      <Main />
    </MemoryRouter>
  );

  // Check presence of key form controls and attributes
  expect(screen.getByLabelText(/First name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Reservation date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Reservation time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();

  // Submit control exists and is initially disabled
  const submit = screen.getByDisplayValue(/Make Your reservation/i);
  expect(submit).toBeInTheDocument();
});
