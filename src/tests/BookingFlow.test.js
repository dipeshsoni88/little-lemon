import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from '../js/Main';

// Provide a simple memory environment for routing
import { MemoryRouter } from 'react-router-dom';

describe('End-to-end booking flow', () => {
  beforeEach(() => {
    // Mock submitAPI to return true
    global.window.submitAPI = jest.fn(() => true);
    // Mock fetchAPI to return some times
    global.window.fetchAPI = jest.fn(() => ['11:00', '12:00', '13:00']);
  });

  afterEach(() => {
    delete global.window.submitAPI;
    delete global.window.fetchAPI;
  });

  test('submitting the booking form navigates to confirmation', async () => {
    render(
      <MemoryRouter initialEntries={["/booking"]}>
        <Main />
      </MemoryRouter>
    );

    // Ensure we're on the booking page (check the page heading)
    expect(screen.getByRole('heading', { name: /Reserve a Table/i })).toBeInTheDocument();

    // Fill date (use the hidden input that Main sets min on)
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const todayISO = `${yyyy}-${mm}-${dd}`;

    const hiddenDate = screen.getByTestId('res-date-hidden');
    fireEvent.change(hiddenDate, { target: { value: todayISO } });

    // Select a time
    const timeSelect = screen.getByLabelText(/Reservation time/i);
    await userEvent.selectOptions(timeSelect, '11:00');

    // Guests already valid

    // Submit - find the input[type=submit] by its value and click it
    const submitInput = screen.getByDisplayValue(/Make Your reservation/i);
    fireEvent.click(submitInput);

    await waitFor(() => {
      expect(screen.getByText(/Booking Confirmed!/i)).toBeInTheDocument();
    });
  });
});
